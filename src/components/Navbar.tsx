import { Link } from "react-router-dom";

export const Topbar = () => {
  return (
    <div className="flex justify-center items-center mt-6">
      <div className="max-w-screen-lg w-full bg-black text-white p-5">
        <img src="/logo.png" className="p-8"/>
        <h1></h1>
        <Navbar />
      </div>
    </div>
  )
}

const navBarItems = [
    {
        title: "About",
        route: '/about'
    },
    {
        title: "Activity",
        route: '/activity'
    },
    {
        title: "Problems",
        route: '/problems'
    },
    {
        title: "Contest",
        route: '/contest'
    },
    {
        title: "Leaderboard",
        route: '/leaderboard'
    },

]

function Navbar() {
    return (
        <div className="flex">
            {navBarItems.map(items => <NavbarItems route={items.route} title={items.title} />)}
        </div>
    )
}

function NavbarItems({title, route}:{
    title: string;
    route: string;
}) {
    return (
        <Link to={route}>
            <div className="mx-10 text-white text-md cursor-pointer hover:text-slate-600">
                {title}
            </div>
        </Link>
    )
}

