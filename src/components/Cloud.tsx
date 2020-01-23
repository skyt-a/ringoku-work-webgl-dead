const Cloud: React.FC = () => (
  <>
    <img className="cloud" src="/images/cloud.png" />
    <style jsx>{`
      .cloud {
        animation: move 10s ease 0s infinite;
        will-change: transform;
      }
      @keyframes move {
        from {
          transform: translate(10px, 10px);
        }
        25% {
          transform: translate(-10px, 10px);
        }
        50% {
          transform: translate(10px, -10px);
        }
        to {
          transform: translate(10px, 10px);
        }
      }
    `}</style>
  </>
);

export default Cloud;
