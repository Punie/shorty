import { useMutation } from '@tanstack/react-query';
import { z } from 'zod';

const schema = z.object({
  slug: z.string(),
  url: z.string().url(),
});

export function useShortenUrl() {
  return useMutation({
    mutationFn: async (url: string) => {
      const response = await fetch('/api/shorten-url', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });

      return schema.parse(await response.json());
    },
  });
}
