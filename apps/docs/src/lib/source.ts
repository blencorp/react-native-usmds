import { docs } from "../../.source";
import { loader } from "fumadocs-core/source";

// Dummy function for now — replace this with real logic
export const fetchComponentMetadata = async () => {
  // Stub/fake implementation for now:
  return {
    Button: {
      props: ['children'],
      description: 'Renders a button',
    },
  };
};

export const source = loader({
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
  fetchComponentMetadata,
});
