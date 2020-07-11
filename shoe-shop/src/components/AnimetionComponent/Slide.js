import { render } from "react-dom";
import React, { useState, useEffect } from "react";
import { useTransition, animated, config } from "react-spring";
import "./styles.css";

const slides = [
  {
    id: 0,
    url:
      "photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 1,
    url:
      "photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    url:
      "photo-1588361861040-ac9b1018f6d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 3,
    url:
      "photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 4,
    url:
      "photo-1508188239917-0fc5f653cb47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 5,
    url:
      "photo-1532561685579-890e8f61456a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 6,
    url:
      "photo-1593820915858-80dca3c871d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
];

const ShoesSlide = () => {
  const [index, set] = useState(0);
  const transitions = useTransition(slides[index], (item) => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  });
  useEffect(
    () => void setInterval(() => set((state) => (state + 1) % 6), 2000),
    []
  );
  return (
    <div style={{ width: "100vw", height: "550px" }}>
      {transitions.map(({ item, props, key }) => (
        <animated.div
          key={key}
          class="bg"
          style={{
            ...props,
            backgroundImage: `url(https://images.unsplash.com/${item.url}&auto=format&fit=crop)`,
          }}
        />
      ))}
    </div>
  );
};

export default ShoesSlide;
