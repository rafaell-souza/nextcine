interface IVideoProps {
    key: string;
    type: string;
    site: string;
    name: string;
}

interface IVideo {
    results: IVideoProps;
}

export default IVideo;