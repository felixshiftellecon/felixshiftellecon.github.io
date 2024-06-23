import Facebook from 'public/icons/social/facebook';
import Instagram from 'public/icons/social/instagram';

export default function Footer() {
  const CompanyAddress = () => (
    <div className="pt-[1.87rem] text-center sm:pt-0 sm:text-left">
      <div className="mt-2.5 leading-tight">
        <a href="https://maps.app.goo.gl/2qcezohCNfxEAAYg9">
          <p>10864 Garrison Hollow Rd</p>
          <p>Clear Spring, Maryland</p>
          <p>21722</p>
        </a>
        <p>
          <a href="tel:2404068117">(240) 406-8117</a>
        </p>
        <p>
          <a href="mailto:sugarsnappeafarm@gmail.com">sugarsnappeafarm@gmail.com</a>
        </p>
      </div>
    </div>
  );

  const SocialIcons = () => (
    <div className="flex items-center gap-5 pt-[1.8rem]">
      <a href="https://www.facebook.com/profile.php?id=61561409632693">
        <Facebook className="max-w-[1.8rem]" />
      </a>
      <a href="https://www.instagram.com/sugarsnappeafarm">
        <Instagram className="max-w-[1.8rem]" />
      </a>
    </div>
  );

  return (
    <footer className="mt-[70px] bg-light-pink pb-10 pt-12">
      <div className="container mx-auto flex max-w-[1140px] flex-col items-center px-2.5">
        <div className="flex w-full flex-col-reverse items-center justify-center sm:flex-row sm:items-start sm:justify-between">
          <CompanyAddress />
        </div>
        <div className="mt-[4.3rem] flex w-full flex-col items-center justify-center ">
          <SocialIcons />
        </div>
      </div>
    </footer>
  );
}
