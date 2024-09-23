import musicaData from "../assets/musics.json";

interface Musica {
  id: number;
  nome: string;
  link_musica: string;
  link_cover: string;
}

export function FavoriteMusic() {
  const musicas: Musica[] = musicaData.musicas;

  return (
    <div className="grid grid-cols-4 grid-rows-2 h-50 px-4 gap-2">
      {musicas.map((musica, index) => (
        <div
          key={musica.id}
          className={`h-full w-full bg-primary ${
            index === 0 ? "row-span-2 col-span-2" : "row-span-1 col-span-1"
          }`}
        >
          <img
            src={musica.link_cover}
            alt={`Capa da música ${musica.nome}`}
            className="h-full w-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}
