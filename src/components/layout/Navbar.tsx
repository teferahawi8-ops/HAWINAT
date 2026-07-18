import { Search, Bell, User, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useFavorites } from "../../context/FavoriteContext";
import SearchBar from "./SearchBar";


const Navbar = () => {


const { favoriteCount } = useFavorites();

const [showSearch, setShowSearch] = useState(false);



return (

<nav className="bg-black/90 backdrop-blur-md fixed top-0 w-full z-50">


<div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">



{/* Logo */}

<Link to="/">

<h1 className="text-4xl font-extrabold">

<span className="text-pink-500">
Hawi
</span>

<span className="text-purple-500">
nat
</span>

</h1>

</Link>





{/* Navigation */}

<ul className="hidden md:flex gap-10 text-white font-medium">


<li>
<Link to="/" className="hover:text-pink-400 transition">
Home
</Link>
</li>


<li>
<Link to="/movies" className="hover:text-pink-400 transition">
Movies
</Link>
</li>


<li>
<Link to="/tv-shows" className="hover:text-pink-400 transition">
TV Shows
</Link>
</li>


<li>
<Link to="/genres" className="hover:text-pink-400 transition">
Genres
</Link>
</li>



<li className="relative">

<Link
to="/favorites"
className="hover:text-pink-400 transition flex items-center gap-2"
>

My List


{
favoriteCount > 0 && (

<span className="
bg-pink-500
text-white
text-xs
rounded-full
px-2
py-1
">

{favoriteCount}

</span>

)

}


</Link>

</li>


</ul>






{/* Icons */}

<div className="flex items-center gap-6 text-white">



{/* Search */}

<button
onClick={() => setShowSearch(!showSearch)}
>

{
showSearch
?
<X
size={22}
className="hover:text-pink-500 transition"
/>
:
<Search
size={22}
className="hover:text-pink-500 transition"
/>
}


</button>





<button>

<Bell
size={22}
className="hover:text-pink-500 transition"
/>

</button>





<button>

<User
size={22}
className="hover:text-pink-500 transition"
/>

</button>


</div>



</div>





{/* Search Bar */}

{

showSearch && (

<div className="
absolute
right-10
top-20
">

<SearchBar />

</div>

)

}


</nav>

);

};


export default Navbar;