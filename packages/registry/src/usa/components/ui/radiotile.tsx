import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef, useContext, createContext } from "react";
import {
  View,
  Text,
  Pressable,
  type GestureResponderEvent,
} from "react-native";
import * as RadioGroupPrimitive from "@rn-primitives/radio-group";
import { cva, type VariantProps } from "class-variance-authority";
import { cssInterop } from "nativewind";
import { cn } from "@/registry/usa/lib/utils";

cssInterop(RadioGroupPrimitive.Root, { className: "style" });
cssInterop(RadioGroupPrimitive.Item, { className: "style" });
cssInterop(RadioGroupPrimitive.Indicator, { className: "style" });

const RadioContext = createContext<{
  value?: string;
  onValueChange?: (value: string) => void;
}>({});

const radioTileVariants = cva(
  "flex w-[329px] flex-col rounded-[2px] border-2",
  {
    variants: {
      variant: {
        default: "",
        withDescription: "gap-2",
      },
      state: {
        checked: "border-primary bg-primary/10",
        unchecked: "border-muted bg-background",
        disabled: "border-muted bg-muted/50",
      },
    },
    defaultVariants: {
      variant: "default",
      state: "unchecked",
    },
  },
);

const radioItemVariants = cva(
  "aspect-square h-5 w-5 rounded-full border-2 bg-background",
  {
    variants: {
      state: {
        checked: "border-primary",
        unchecked: "border-input",
        disabled: "border-muted",
      },
    },
    defaultVariants: {
      state: "unchecked",
    },
  },
);

const radioIndicatorVariants = cva("h-[10px] w-[10px] rounded-full", {
  variants: {
    state: {
      checked: "bg-primary",
      disabled: "bg-muted-foreground",
    },
  },
  defaultVariants: {
    state: "checked",
  },
});

type RadioTileProps = ComponentPropsWithoutRef<
  typeof RadioGroupPrimitive.Item
> &
  VariantProps<typeof radioTileVariants> & {
    label: string;
    description?: string;
    className?: string;
  };

const RadioTileGroup = forwardRef<
  ElementRef<typeof RadioGroupPrimitive.Root>,
  ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, children, ...props }, ref) => {
  return (
    <RadioContext.Provider
      value={{ value: props.value, onValueChange: props.onValueChange }}
    >
      <RadioGroupPrimitive.Root ref={ref} className={cn(className)} {...props}>
        <View className="flex flex-col gap-3">{children}</View>
      </RadioGroupPrimitive.Root>
    </RadioContext.Provider>
  );
});

const RadioTile = forwardRef<
  ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioTileProps
>(
  (
    {
      label,
      description,
      variant = description ? "withDescription" : "default",
      className,
      ...props
    },
    ref,
  ) => {
    const labelId = `${props.value}-label`;
    const descriptionId = `${props.value}-description`;
    const { value, onValueChange } = useContext(RadioContext);
    const isSelected = value === props.value;

    const state = props.disabled
      ? "disabled"
      : isSelected
        ? "checked"
        : "unchecked";

    const handlePress = (event: GestureResponderEvent) => {
      if (props.disabled) return;
      props.onPress?.(event);
      onValueChange?.(props.value as string);
    };

    return (
      <Pressable onPress={handlePress} disabled={props.disabled}>
        <View
          className={cn(
            radioTileVariants({ variant, state }),
            "p-[13px_16px_13px_9px]",
            className,
          )}
        >
          <View className="flex min-h-[44px] flex-row items-center gap-2">
            <View
              className={cn(
                radioItemVariants({ state }),
                "flex items-center justify-center",
              )}
            >
              <RadioGroupPrimitive.Item
                ref={ref}
                aria-labelledby={labelId}
                aria-describedby={description ? descriptionId : undefined}
                className="h-full w-full items-center justify-center"
                {...props}
              >
                <RadioGroupPrimitive.Indicator className="items-center justify-center">
                  <View
                    className={cn(
                      radioIndicatorVariants({
                        state: props.disabled ? "disabled" : "checked",
                      }),
                    )}
                  />
                </RadioGroupPrimitive.Indicator>
              </RadioGroupPrimitive.Item>
            </View>
            <Text
              nativeID={labelId}
              className={cn(
                "flex-1 text-base leading-5",
                props.disabled ? "text-muted-foreground" : "text-foreground",
              )}
            >
              {label}
            </Text>
          </View>
          {description ? (
            <Text
              nativeID={descriptionId}
              className={cn(
                "pl-7 text-[15px] leading-[19px]",
                props.disabled ? "text-muted-foreground" : "text-foreground",
              )}
            >
              {description}
            </Text>
          ) : null}
        </View>
      </Pressable>
    );
  },
);

RadioTileGroup.displayName = "RadioTileGroup";
RadioTile.displayName = "RadioTile";

export { RadioTile, RadioTileGroup };
export type { RadioTileProps };
