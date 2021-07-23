import './index.scss';

interface Props {
  index: number;
  email: string;
  name: string;
  body: string;
}

const TextListItem = ({ index, email, name, body }: Props) => {
  return (
    <div className="text-list-item">
      <p>index: {index}</p>
      <p>email: {email}</p>
      <p>name: {name}</p>
      <p>body: {Array.from({ length: 2 }).map(() => body)}</p>
    </div>
  );
};

export default TextListItem;
