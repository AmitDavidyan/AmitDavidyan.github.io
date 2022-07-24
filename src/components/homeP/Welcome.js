function Welcome() {
  return (
    <div>
      <h1>Welcome</h1>
      <button
        onClick={() => {
          x();
        }}
      >
        Enter
      </button>
    </div>
  );
}
function x() {
  console.log("test");
}
export default Welcome;
