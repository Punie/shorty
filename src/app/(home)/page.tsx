'use client';

import Link from 'next/link';
import { FiCopy } from 'react-icons/fi';
import { TbCheck } from 'react-icons/tb';

import Alert from '~components/Alert';
import { useClipboard } from '~hooks/useClipboard';
import { useShortenUrl } from '~hooks/useShortenUrl';

import Form from './form';

export default function Home() {
  const { copy, copied } = useClipboard();
  const { mutate, data, isLoading, isError } = useShortenUrl();

  return (
    <div>
      <Form
        isLoading={isLoading}
        onSubmit={({ url }) => {
          mutate(url);
        }}
      />

      {isError && (
        <Alert title="Uh oh!" className="mt-4">
          Something wrong happened
        </Alert>
      )}

      {data && (
        <div className="mx-auto mt-4 flex items-center justify-between rounded-lg border border-indigo-600 px-4 py-2 text-lg font-semibold text-indigo-600 md:mt-8 md:w-fit md:gap-2 md:text-3xl">
          <Link
            className="hover:underline"
            href={data.slug}
            prefetch={false}
            target="_blank"
          >
            {data.url}
          </Link>

          {copied ? (
            <div className="text-green-500">
              <TbCheck />
            </div>
          ) : (
            <button
              onClick={() => copy(data.url)}
              className="hover:text-indigo-600"
            >
              <FiCopy />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
