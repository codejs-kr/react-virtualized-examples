import './index.scss';

interface Props {
  index: number;
  imageUrl: string;
  title: string;
  onLoad?: () => void;
}

const ImageListItem = ({ index, imageUrl, title, onLoad }: Props) => {
  return (
    <div className="image-list-item">
      <section className="thumb-wrap">
        <img src={imageUrl} alt="" onLoad={() => onLoad?.()} />
      </section>
      <section>
        <p>index: {index}</p>
        <p>{Array.from({ length: 10 }).map(() => title)}</p>
      </section>
    </div>
  );
};

export default ImageListItem;
