import React, { createContext } from "react";


export const CreateContext=createContext()

export function MovieList({children}) {
  const movies = [
    {
      id: 1,
      title: "amaran",
      image: "/assets/amaran.jpeg",
      Year: "2023",
      Rated: "UA",
      Released: "15 Sep 2023",
      Runtime: "142 min",
      Genre: "Drama, Romance",
    },
    {
      id: 2,
      title: "dada",
      image: "/assets/dada.jpeg",
      Year: "2023",
    Rated: "UA",
    Released: "10 Feb 2023",
    Runtime: "150 min",
    Genre: "Drama, Family",
    },
    {
      id: 3,
      title: "Hi Nanna",
      image: "/assets/hainanna.jpeg",
      Year: "2022",
    Rated: "UA",
    Released: "18 Nov 2022",
    Runtime: "138 min",
    Genre: "Romance, Drama",
    },
    {
      id: 4,
      title: "Krishna Gaadi Veera Prema Gaadha",
      image: "/assets/krishnagadiverapremagadha.jpeg",
      Year: "2016",
    Rated: "UA",
    Released: "30 Sep 2016",
    Runtime: "156 min",
    Genre: "Romance",
    },
    {
      id: 5,
      title: "madharasi",
      image: "/assets/madharaasi.jpeg",
      Year: "2024",
    Rated: "UA",
    Released: "12 Jan 2024",
    Runtime: "148 min",
    Genre: "Action, Drama",
    },
    {
      id: 6,
      title: "MCA Middle Class Abbayi",
      image: "/assets/middleclassabbayi.jpeg",
      Year: "2017",
      Rated: "UA",
      Released: "21 Dec 2017",
      Runtime: "143 min",
      Genre: "Family, Drama",
    },
    {
      id: 7,
      title: "retro",
      image: "/assets/retro.jpeg",
      Year: "2023",
    Rated: "UA",
    Released: "14 Jul 2023",
    Runtime: "135 min",
    Genre: "Action, Thriller",
    },
    {
      id: 8,
      title: "baby",
      image: "/assets/baby.jpeg",
      Year: "2023",
    Rated: "A",
    Released: "14 Jul 2023",
    Runtime: "175 min",
    Genre: "Romance, Drama",
    },
    {
      id: 9,
      title: "desamuduru",
      image: "/assets/desamuduru.jpeg",
      Year: "2007",
      Rated: "UA",
      Released: "12 Jan 2007",
      Runtime: "152 min",
      Genre: "Action, Romance",
    },
    {
      id: 10,
      title: "okkadu",
      image: "/assets/okkadu.jpeg",
      Year: "2003",
      Rated: "UA",
      Released: "15 Jan 2003",
      Runtime: "170 min",
      Genre: "Action, Drama",
    },
  ];
  

  return  (


    <>
  <CreateContext.Provider   value={{movies}}  >

{children}
</CreateContext.Provider>
    
    </>
  )

}
