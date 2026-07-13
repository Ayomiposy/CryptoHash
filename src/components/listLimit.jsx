export const LimitFilter = ({ limit, setLimit }) => {
  return (
    <div>
      <div className="controls">
        <label htmlFor="limit">Limit</label>
        <select
          name="limit"
          id="limit"
          value={limit}
          onChange={(e) => {
            setLimit(e.target.value);
          }}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">500</option>
          <option value="100">1000</option>
        </select>
      </div>
    </div>
  );
};
