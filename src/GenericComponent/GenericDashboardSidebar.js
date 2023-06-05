import React from 'react'; 
import Lumos from '../assest/Lumos.png';

const NavbarItem = ({ title, classProps }) => (
    <div
      to={  
        title.toLowerCase() === "courses"
          ? "/courses"
          : title.toLowerCase() === "home"
          ? "/"
          : title.toLowerCase() === "profile"
          ? "/profile"
          : title.toLowerCase() === "about us"
          ? "/about-us" 
          : title.toLowerCase() === "quest"
          ? "/quest"
          : "/"
      }
    >
      <li
        className={`mx-6 cursor-pointer hover:underline hover:underline-offset-8 focus:underline focus:underline-offset-8 text-xs tracking-widest ${classProps}`}
      >
        {title}
      </li>
    </div>
  );

function GenericDashboardSidebar() {
    var NavLinkList = ["Dashboard","Team", "Notification","Profile Setting"];
    return (
        <aside class="sticky top-0 font-InterRegular">
            <div className='flex bg-[#160635] h-screen items-center flex-col item-center'>
                <div className='flex mt-16 flex-col'>
                    <img src={Lumos} className='w-36 h-12' />
                    <div className='tracking-[0.2rem] text-sm text-[#D3D3D3] ml-4'>HACKATHON</div>
                </div>
                <div className="text-white md:flex list-none flex-col mt-16 items-left space-y-12 flex-initial mr-12 ml-8">
                    {NavLinkList.map((item, index) => (
                        <NavbarItem key={item + index} title={item} />
                    ))}
                </div>
            </div>
        </aside>
    )
}

export default GenericDashboardSidebar