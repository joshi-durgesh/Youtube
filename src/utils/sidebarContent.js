import {
  BsHouseDoor,
  SiYoutubeshorts,
  MdOutlineSubscriptions,
  GoHistory,
  BsClock,
  AiOutlineLike,
  BsFire,
  HiOutlineShoppingBag,
  IoMusicalNoteOutline,
  BiMoviePlay,
  HiMiniSignal,
  PiGameController,
  HiOutlineNewspaper,
  GrTrophy,
  AiOutlineBulb,
  GiHanger,
  MdOutlinePodcasts,
} from "../components/IconComponents";

const sidebarContent = [
  {
    id: "Main",
    item: [
      {
        name: "Home",
        icon: BsHouseDoor,
      },
      {
        name: "Shorts",
        icon: SiYoutubeshorts,
      },
      {
        name: "Subscriptions",
        icon: MdOutlineSubscriptions,
      },
    ],
  },
  {
    id: "You",
    item: [
      {
        name: "History",
        icon: GoHistory,
      },
      {
        name: "Watch later",
        icon: BsClock,
      },
      {
        name: "Liked",
        icon: AiOutlineLike,
      },
    ],
  },
  {
    id: "Explore",
    item: [
      {
        name: "Trending",
        icon: BsFire,
      },
      {
        name: "Shopping",
        icon: HiOutlineShoppingBag,
      },
      {
        name: "Music",
        icon: IoMusicalNoteOutline,
      },
      {
        name: "Movies",
        icon: BiMoviePlay,
      },
      {
        name: "Live",
        icon: HiMiniSignal,
      },
      {
        name: "Gaming",
        icon: PiGameController,
      },
      {
        name: "News",
        icon: HiOutlineNewspaper,
      },
      {
        name: "Sports",
        icon: GrTrophy,
      },
      {
        name: "Learning",
        icon: AiOutlineBulb,
      },
      {
        name: "Fashion & Beauty",
        icon: GiHanger,
      },
      {
        name: "Podcasts",
        icon: MdOutlinePodcasts,
      },
    ],
  },
];
export default sidebarContent;
