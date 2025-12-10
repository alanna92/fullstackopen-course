const Header = (props) => {
  return <h1>{props.courseName}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  );
};

const Content = (props) => {
  return (
    <>
      {props.content.map((part) => (
        <Part key={part.name} name={part.name} exercises={part.exercises} />
      ))}
    </>
  );
};

const Total = (props) => {
  const total = props.content.reduce((sum, part) => sum + part.exercises, 0);
  return <p>Number of exercises {total}</p>;
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;
  const content = [
    { name: part1, exercises: exercises1 },
    { name: part2, exercises: exercises2 },
    { name: part3, exercises: exercises3 },
  ];

  return (
    <div>
      <Header courseName={course} />
      <Content content={content} />
      <Total content={content} />
    </div>
  );
};

export default App;
