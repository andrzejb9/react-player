import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Rainbow Roll",
      artist: "Strehlow",
      cover: "https://i.scdn.co/image/ab67616d0000b27334d70ae4de5f638886d3a3ff",
      id: uuidv4(),
      active: true,
      color: ["#724183", "#9B73F0"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=35642",
    },
    {
      name: "Jazz Cabbage",
      artist: "Ian Ewing, Strehlow",
      cover: "https://i.scdn.co/image/ab67616d0000b273c266150b4cdccf2ced31d166",
      id: uuidv4(),
      active: false,
      color: ["#B3514C", "#C09585"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9363",
    },
    {
      name: "Lagoons",
      artist: "Strehlow, Chris Mazuera",
      cover: "https://i.scdn.co/image/ab67616d0000b273c266150b4cdccf2ced31d166",
      id: uuidv4(),
      active: false,
      color: ["#B3514C", "#C09585"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8266",
    },
    {
      name: "Angel Eyes",
      artist: "Strehlow",
      cover: "https://i.scdn.co/image/a107c2856862918d8da5249f77ec83bec388d4cf",
      id: uuidv4(),
      active: false,
      color: ["#F2C768", "#4B7196"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9112",
    },
    {
      name: "Growing Through The Cracks",
      artist: "Philanthrope, mommy",
      cover: "https://i.scdn.co/image/ab67616d0000b273cf6542bf8361937ca6e24800",
      id: uuidv4(),
      active: false,
      color: ["#39194A", "#826FC8"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=35636",
    },
    {
      name: "Far From Home",
      artist: "Toonorth",
      cover: "https://i.scdn.co/image/ab67616d0000b2735535f543c779c037efc3d4b4",
      id: uuidv4(),
      active: false,
      color: ["#D7986D", "#4F807D"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8127",
    },
    {
      name: "Harvest",
      artist: "Soul Food Horns, Blue Wednesday, G Mills",
      cover: "https://i.scdn.co/image/ab67616d0000b273b1ce8c01727b0aecc31d7b57",
      id: uuidv4(),
      active: false,
      color: ["#B5244B", "#D28C8A"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8127",
    },
    {
      name: "Cloud Carpets",
      artist: "The Field Tapes, Ezzy, Wowflower",
      cover: "https://i.scdn.co/image/ab67616d0000b2733d2e66180f92ab0df64dae93",
      id: uuidv4(),
      active: false,
      color: ["#425F97", "#9AB25A"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=11248",
    },
    {
      name: "Embers",
      artist: "Blue Wednesday, Aso",
      cover: "https://i.scdn.co/image/ab67616d0000b273d74d04bdd8ed893edb635df0",
      id: uuidv4(),
      active: false,
      color: ["#443C65", "#DF8390"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9048",
    },
  ];
}

export default chillHop;
