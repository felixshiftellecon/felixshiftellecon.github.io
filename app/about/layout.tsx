import Header from 'components/layout/header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header isInternalPage />
      <div className="w-full">
        <div className="container mx-auto  max-w-2xl px-2.5">{children}</div>
      </div>
    </>
  );
}
