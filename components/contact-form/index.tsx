'use client';

import { Button } from 'components/button';

const Input = ({ label, id, type = 'text' }: { label: string; id: string; type?: string }) => (
  <div className="flex flex-col">
    <label className="block text-sm font-medium" htmlFor={id}>
      {label}
    </label>
    <input
      className="sm:leading-0 text-xs block w-full rounded-md border-[1px] bg-transparent px-2.5 py-1 text-gray-900 shadow-none placeholder:text-gray-400 focus:outline-none"
      type={type}
      name={id}
      id={id}
    />
  </div>
);

export default function ContactForm() {
  const formHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('form submitted!');
  };

  return (
    <div className="mb-[70px]">
      <h2 className="mb-8 text-header-2 font-semibold leading-none">The form</h2>
      <p className="leading-7">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
        voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
        cupiditate non provident.
      </p>
      <form className="w-full" onSubmit={formHandler}>
        <div className="grid grid-cols-2 gap-4">
          <Input label="Your Name" id="name" />
          <Input label="Your Email" id="email" type="email" />
        </div>
        <div>
          <label className="lock text-sm font-medium" htmlFor="message">
            Your message
          </label>
          <textarea
            className="sm:leading-0 text-xs block w-full resize-none rounded-md border-[1px] bg-transparent px-2.5 py-1 text-gray-900 shadow-none placeholder:text-gray-400 focus:outline-none"
            id="message"
            rows={8}
          ></textarea>
        </div>
        <div className="mt-3">
          <Button>Send it</Button>
        </div>
      </form>
    </div>
  );
}
