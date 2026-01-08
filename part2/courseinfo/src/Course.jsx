const Header = (props) => {
  console.log(props);
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
  return <b>Total of {total} exercises</b>;
};

const Course = ({ course }) => {
  return (
    <div>
      <Header courseName={course.name} />
      <Content content={course.parts} />
      <Total content={course.parts} />
    </div>
  );
};

export default Course;
