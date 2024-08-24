import Card from './Card';

const Animal = {
  name: 'Snuggle Squad',
  id: 1,
};

export default function Display() {
  return (
    <div>
        <Card name={Animal.name} id={feline.id} />
        <Card name={Animal.name} id={feline.id} />
        <Card name={Animal.name} id={feline.id} />
        <Card name={Animal.name} id={feline.id} />
        <Card name={Animal.name} id={feline.id} />
        <Card name={Animal.name} id={feline.id} />
    </div>
  );
}
