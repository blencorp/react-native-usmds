import * as React from 'react';
import { View } from 'react-native';
import { Text } from '@registry/usa/components/ui/text';
import * as Examples from '@showcase/registry/examples';
import registry from '../../../packages/registry/generated/usa.json';

export type ShowcasePreview = {
  name: string;
  component: React.ComponentType;
};

export type ShowcaseComponent = {
  slug: string;
  title: string;
  description?: string;
  tags?: string[];
  previews: ShowcasePreview[];
};

type RegistryItem = {
  name: string;
  title?: string;
  description?: string;
  type: string;
  registryDependencies?: string[];
  dependencies?: string[];
};

type RegistryJson = {
  items: RegistryItem[];
};

const PREVIEW_REGISTRY: Record<string, ShowcasePreview[]> = {
  accordion: [{ name: 'Default', component: Examples.AccordionPreview }],
  alert: [{ name: 'Usage', component: Examples.AlertPreview }],
  'alert-dialog': [{ name: 'Default', component: Examples.AlertDialogPreview }],
  'aspect-ratio': [{ name: 'Image', component: Examples.AspectRatioPreview }],
  avatar: [{ name: 'Avatars', component: Examples.AvatarPreview }],
  badge: [{ name: 'Variants', component: Examples.BadgePreview }],
  banner: [{ name: 'Domain Variants', component: Examples.BannerPreview }],
  biometricsignin: [{ name: 'Biometric Sign In', component: Examples.BiometricSignInPreview }],
  button: [
    { name: 'Default', component: Examples.ButtonPreview },
    { name: 'Secondary', component: Examples.ButtonSecondaryPreview },
    { name: 'Destructive', component: Examples.ButtonDestructivePreview },
    { name: 'Outline', component: Examples.ButtonOutlinePreview },
    { name: 'Ghost', component: Examples.ButtonGhostPreview },
    { name: 'Link', component: Examples.ButtonLinkPreview },
    { name: 'With Icon', component: Examples.ButtonWithIconPreview },
    { name: 'Icon', component: Examples.ButtonIconPreview },
  ],
  buttongroup: [{ name: 'Orientations', component: Examples.ButtonGroupPreview }],
  card: [{ name: 'Subscription Card', component: Examples.CardPreview }],
  checkbox: [{ name: 'States', component: Examples.CheckboxPreview }],
  checkboxtile: [{ name: 'Tiles', component: Examples.CheckboxTilePreview }],
  collapsible: [{ name: 'Default', component: Examples.CollapsiblePreview }],
  'context-menu': [{ name: 'Actions', component: Examples.ContextMenuPreview }],
  dialog: [{ name: 'Dialog', component: Examples.DialogPreview }],
  'dropdown-menu': [{ name: 'Menu', component: Examples.DropdownMenuPreview }],
  'hover-card': [{ name: 'Hover', component: Examples.HoverCardPreview }],
  icon: [{ name: 'Icons', component: Examples.IconPreview }],
  label: [{ name: 'Form Label', component: Examples.LabelPreview }],
  link: [{ name: 'Link Styles', component: Examples.LinkPreview }],
  menubar: [{ name: 'Navigation', component: Examples.MenubarPreview }],
  'native-only-animated-view': [
    { name: 'Animated Panel', component: Examples.NativeOnlyAnimatedViewPreview },
  ],
  pagination: [{ name: 'Default', component: Examples.PaginationPreview }],
  popover: [{ name: 'Popover', component: Examples.PopoverPreview }],
  progress: [{ name: 'Progress', component: Examples.ProgressPreview }],
  radiobutton: [{ name: 'Radio Buttons', component: Examples.RadioButtonPreview }],
  radiogroup: [{ name: 'Radio Group', component: Examples.RadioGroupPreview }],
  radiotile: [{ name: 'Radio Tiles', component: Examples.RadioTilePreview }],
  select: [{ name: 'Select', component: Examples.SelectPreview }],
  separator: [{ name: 'Separator', component: Examples.SeparatorPreview }],
  skeleton: [{ name: 'Skeleton', component: Examples.SkeletonPreview }],
  snackbar: [{ name: 'Snackbar', component: Examples.SnackbarPreview }],
  stepindicator: [{ name: 'Step Indicator', component: Examples.StepIndicatorPreview }],
  switch: [{ name: 'Switch', component: Examples.SwitchPreview }],
  tabs: [{ name: 'Tabs', component: Examples.TabsPreview }],
  tag: [{ name: 'Tag', component: Examples.TagPreview }],
  text: [
    { name: 'Text', component: Examples.TextPreview },
    { name: 'Cascade', component: Examples.TextCascadePreview },
    { name: 'Typography', component: Examples.TextTypographyPreview },
  ],
  textarea: [{ name: 'Textarea', component: Examples.TextareaPreview }],
  textinput: [{ name: 'Text Input', component: Examples.TextInputPreview }],
  toggle: [{ name: 'Toggle', component: Examples.TogglePreview }],
  'toggle-group': [{ name: 'Toggle Group', component: Examples.ToggleGroupPreview }],
  tooltip: [{ name: 'Tooltip', component: Examples.TooltipPreview }],
};

const data = registry as RegistryJson;

export const COMPONENT_MAP: Record<string, ShowcaseComponent> = data.items
  .filter((item) => item.type === 'registry:ui')
  .reduce<Record<string, ShowcaseComponent>>((acc, item) => {
    const slug = item.name;
    const title = item.title ?? toTitleCase(slug);
    const previews = PREVIEW_REGISTRY[slug] && PREVIEW_REGISTRY[slug].length
      ? PREVIEW_REGISTRY[slug]
      : [{ name: title, component: createPlaceholder(title) }];

    acc[slug] = {
      slug,
      title,
      description: item.description,
      tags: createTags(item),
      previews,
    };

    return acc;
  }, {});

export const COMPONENTS = Object.values(COMPONENT_MAP)
  .map(({ slug, title, description, tags }) => ({ slug, title, description, tags }))
  .sort((a, b) => a.title.localeCompare(b.title));

function createTags(item: RegistryItem) {
  const base = item.name.split('-');
  return Array.from(
    new Set([
      item.name,
      ...base,
      ...(item.registryDependencies ?? []),
      ...(item.dependencies ?? []),
    ])
  );
}

function toTitleCase(slug: string) {
  return slug
    .split('-')
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(' ');
}

function createPlaceholder(title: string): React.ComponentType {
  return function Placeholder() {
    return (
      <View className="items-center justify-center gap-2 px-6">
        <Text className="text-center text-muted-foreground">
          Preview for {title} coming soon.
        </Text>
      </View>
    );
  };
}

export type ShowcaseListItem = (typeof COMPONENTS)[number];
