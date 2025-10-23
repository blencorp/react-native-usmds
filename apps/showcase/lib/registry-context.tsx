import * as React from "react";
import {
  FALLBACK_COMPONENT_MAP,
  FALLBACK_COMPONENTS,
  ShowcaseComponent,
  ShowcaseListItem,
  buildComponentList,
  buildComponentMap,
  fetchRegistryJson,
} from "@showcase/lib/constants";

type RegistryState = {
  components: ShowcaseListItem[];
  componentMap: Record<string, ShowcaseComponent>;
  loading: boolean;
};

const RegistryContext = React.createContext<RegistryState>({
  components: FALLBACK_COMPONENTS,
  componentMap: FALLBACK_COMPONENT_MAP,
  loading: false,
});

export function ComponentRegistryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, setState] = React.useState<RegistryState>({
    components: FALLBACK_COMPONENTS,
    componentMap: FALLBACK_COMPONENT_MAP,
    loading: false,
  });

  React.useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    async function hydrate() {
      setState((prev) => ({ ...prev, loading: true }));
      const registry = await fetchRegistryJson(controller.signal);
      if (!registry) {
        if (isMounted) {
          setState((prev) => ({ ...prev, loading: false }));
        }
        return;
      }

      if (isMounted) {
        const map = buildComponentMap(registry.items);
        const list = buildComponentList(map);
        setState({ components: list, componentMap: map, loading: false });
      }
    }

    hydrate();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return (
    <RegistryContext.Provider value={state}>
      {children}
    </RegistryContext.Provider>
  );
}

export function useComponentRegistry() {
  return React.useContext(RegistryContext);
}
