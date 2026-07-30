import { BarLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto 50px auto",
};

export const Spinner = ({ size = 150, color = "blue" }) => {
  return (
    <div>
      <BarLoader color={color} size={size} cssOverride={override} />
    </div>
  );
};
