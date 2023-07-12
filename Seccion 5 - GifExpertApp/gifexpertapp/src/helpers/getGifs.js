
export const getGifs = async (category) => {
    const apiKey = 'PB72OCC69VnnqfuxzpIoLCdo9d1XDjJ1';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`;
    const res = await fetch(url);
    const { data } = await res.json(); 
    
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
} 