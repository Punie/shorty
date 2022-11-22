'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { ImSpinner2 } from 'react-icons/im';
import { TbArrowRight, TbLink } from 'react-icons/tb';
import { z } from 'zod';

const schema = z.object({
  url: z.string().url({ message: 'Not a valid URL' }),
});

type FormModel = z.infer<typeof schema>;

export default function FormNew({
  isLoading,
  onSubmit,
}: {
  isLoading: boolean;
  onSubmit: SubmitHandler<FormModel>;
}) {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormModel>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label
        htmlFor="url-input-field"
        className="mb-1 block text-lg font-semibold md:text-2xl"
      >
        Your URL <span className="text-red-500">*</span>
      </label>
      <div className="relative">
        <div
          className={clsx(
            'absolute top-0 left-0 p-2 text-[28px] md:text-[32px]',
            {
              'text-slate-300': !errors.url,
              'text-red-500': !!errors.url,
            },
          )}
        >
          <TbLink />
        </div>

        <input
          id="url-input-field"
          type="text"
          placeholder="Your URL"
          className={clsx(
            'peer w-full rounded-lg border-none bg-transparent pl-11 text-lg ring-1 placeholder:text-slate-300 md:px-12 md:text-2xl',
            {
              'ring-slate-300 focus:ring-indigo-400': !errors.url,
              'text-red-500 ring-red-500': !!errors.url,
            },
          )}
          {...register('url')}
        />

        {isLoading ? (
          <div className="absolute top-0 right-0 hidden p-2 text-green-400 md:block">
            <ImSpinner2 className="animate-spin" size={32} />
          </div>
        ) : (
          <button
            type="submit"
            tabIndex={-1}
            className={clsx(
              'absolute top-0 right-0 hidden p-2 opacity-100 transition ease-in peer-placeholder-shown:-translate-x-full peer-placeholder-shown:opacity-0 motion-reduce:transition-none md:block',
              { 'text-indigo-500': !errors.url, 'text-red-500': !!errors.url },
            )}
          >
            <TbArrowRight size={32} />
          </button>
        )}
      </div>

      {errors.url && (
        <div className="mt-1 text-xs text-red-500 md:text-sm">
          {errors.url.message}
        </div>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="relative mt-4 w-full place-content-center rounded-lg bg-indigo-500 px-4 py-2 font-bold text-slate-50 hover:bg-indigo-600 disabled:opacity-75 md:hidden md:w-auto"
      >
        <span className={clsx({ invisible: isLoading })}>Shorten URL</span>
        {isLoading && (
          <div className="absolute inset-0 grid place-content-center text-xl">
            <ImSpinner2 className="animate-spin" />
          </div>
        )}
      </button>
    </form>
  );
}
