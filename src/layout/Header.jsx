import { socialLinks } from "../constant/header";

const Header = () => {
  return (
    <header>
      <section className="header-top flex justify-center text-[#777b93] bg-[whitesmoke] py-2 ">
        <div className="container">
          <div className="flex justify-between">
            <div className="col-md-6">
              <div className="times text-[12px] md:text-[16px]">
                <span>Hãy để Điện Mặt Trời phục vụ bạn 24/7</span>
              </div>
            </div>
            <ul className="flex items-center gap-2">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} title={link.title}>
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
