import Cloud from "./Cloud";

const Sky: React.FC = () => (
  <>
    <div className="sky">
      <Cloud />
      <style jsx>{`
        .sky {
          width: 100vw;
          height: 100vh;
          background-image: -webkit-gradient(
            linear,
            left bottom,
            left top,
            color-stop(0.28, rgb(69, 132, 180)),
            color-stop(0.64, rgb(31, 71, 120))
          );
        }
      `}</style>
      <style global jsx>{`
        body {
          margin: unset;
        }
      `}</style>
    </div>
  </>
);

export default Sky;
