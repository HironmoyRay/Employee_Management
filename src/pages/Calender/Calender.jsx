const Calender = () => {
  return (
    <div className="max-w-screen-xl mx-auto ">
      <table className="table mt-10 mx-4">
        <thead>
          <tr className="text-center border border-SECONDARY-light text-base">
            <td className="border w-40 h-10 border-SECONDARY-light "></td>
            <td className="border w-40 h-10 border-SECONDARY-light ">SUN</td>
            <td className="border w-40 h-10 border-SECONDARY-light ">MON</td>
            <td className="border w-40 h-10 border-SECONDARY-light ">TUE</td>
            <td className="border w-40 h-10 border-SECONDARY-light ">WED</td>
            <td className="border w-40 h-10 border-SECONDARY-light ">THU</td>
            <td className="border w-40 h-10 border-SECONDARY-light ">TRI</td>
            <td className="border w-40 h-10 border-SECONDARY-light ">SAT</td>
            <td className="border w-40 h-10 border-SECONDARY-light text-center">
              TOTAL
            </td>
          </tr>
        </thead>
        <tbody>
          <tr className="m-0 p-0 ">
            <th className="border border-SECONDARY-light p-1 text-center">
              WEEK 1
            </th>
            <td className="border border-SECONDARY-light m-0w-20 p-1">
              <div className="text-right w-40 h-10 m-0 text-xl font-semibold pr-2">
                27
              </div>
              <div className="text-right w-40 h-10 m-0  text-SECONDARY pr-2 ">
                10
              </div>
            </td>
            <td className="border border-SECONDARY-light p-1">
              <div className="text-right text-xl font-semibold pr-2">1</div>
              <div className="text-right text-SECONDARY pr-2">6</div>
            </td>
            <td className="border border-SECONDARY-light p-1">
              <div className="text-right text-xl font-semibold pr-2">1</div>
              <div className="text-right text-SECONDARY pr-2">6</div>
            </td>
            <td className="border border-SECONDARY-light p-1">
              <div className="text-right text-xl font-semibold pr-2">1</div>
              <div className="text-right text-SECONDARY pr-2">6</div>
            </td>
            <td className="border border-SECONDARY-light p-1">
              <div className="text-right text-xl font-semibold pr-2">1</div>
              <div className="text-right text-SECONDARY pr-2">6</div>
            </td>
            <td className="border border-SECONDARY-light p-1">
              <div className="text-right text-xl font-semibold pr-2">1</div>
              <div className="text-right text-SECONDARY pr-2">6</div>
            </td>
            <td className="border border-SECONDARY-light p-1">
              <div className="text-right text-xl font-semibold pr-2">1</div>
              <div className="text-right text-SECONDARY pr-2">6</div>
            </td>
            <td className="border border-SECONDARY-light p-1 text-center text-xl text-SECONDARY font-semibold ">
              15
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calender;
