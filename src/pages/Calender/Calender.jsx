import DateLog from "../DateLog/DateLog";

const Calender = () => {
  return (
    <div className="max-w-screen-xl mx-auto mb-20">
      <table className="mt-10 mx-4">
        <thead>
          <tr className="border-2 border-PRIMARY-dark  ">
            <td
              colSpan="9"
              className="bg-PRIMARY-dark text-WHITE text-xl  h-8  text-center "
            >
              <span>MARCH</span>
              <span> 2024</span>
            </td>
          </tr>
          <tr className="text-center border-2 border-SECONDARY  text-base font-medium bg-SECONDARY-light">
            <td className="border-2 w-36 p-0 h-8 border-SECONDARY "></td>
            <td className="border-2 w-36 p-0 h-8 border-SECONDARY">SUN</td>
            <td className="border-2 w-36 p-0 h-8 border-SECONDARY">MON</td>
            <td className="border-2 w-36 p-0 h-8 border-SECONDARY">TUE</td>
            <td className="border-2 w-36 p-0 h-8 border-SECONDARY">WED</td>
            <td className="border-2 w-36 p-0 h-8 border-SECONDARY">THU</td>
            <td className="border-2 w-36 p-0 h-8 border-SECONDARY">FRI</td>
            <td className="border-2 w-36 p-0 h-8 border-SECONDARY">SAT</td>
            <td className="border-2 w-36 p-0 h-8 border-SECONDARY text-center">
              TOTAL
            </td>
          </tr>
        </thead>

        <tbody>
          {/* Week 1 */}
          <tr>
            <th className="border-2 border-SECONDARY p-1 text-center">
              <span>Week</span> <span> 1</span>
            </th>
            <td className="border-2 border-SECONDARY  w-36 p-0 hover:bg-SECONDARY-light">
              <div className="text-right h-8 text-xl text-SECONDARY-light  font-semibold  pr-2 hover:bg-SECONDARY-dark hover:text-WHITE">
                26
              </div>
              <div className="text-right h-8 text-SECONDARY-light   font-medium pr-2 hover:bg-SECONDARY hover:text-WHITE flex justify-between"></div>
            </td>
            <td className="border-2 border-SECONDARY  w-36 p-0 hover:bg-SECONDARY-light">
              <div className="text-right h-8 text-xl text-SECONDARY-light  font-semibold  pr-2 hover:bg-SECONDARY-dark hover:text-WHITE">
                27
              </div>
              <div className="text-right h-8 text-SECONDARY-light   font-medium pr-2 hover:bg-SECONDARY hover:text-WHITE flex justify-between"></div>
            </td>
            <td className="border-2 border-SECONDARY  w-36 p-0 hover:bg-SECONDARY-light">
              <div className="text-right h-8 text-xl text-SECONDARY-light   font-semibold  pr-2 hover:bg-SECONDARY-dark hover:text-WHITE">
                28
              </div>
              <div className="text-right h-8 text-SECONDARY-light   font-medium pr-2 hover:bg-SECONDARY hover:text-WHITE flex justify-between"></div>
            </td>
            <td className="border-2 border-SECONDARY  w-36 p-0 hover:bg-SECONDARY-light">
              <div className="text-right h-8 text-xl text-SECONDARY-light   font-semibold  pr-2 hover:bg-SECONDARY-dark hover:text-WHITE">
                29
              </div>
              <div className="text-right h-8 text-SECONDARY-light   font-medium pr-2 hover:bg-SECONDARY hover:text-WHITE flex justify-between"></div>
            </td>
            <td className="border-2 border-SECONDARY  w-36 p-0 hover:bg-SECONDARY-light">
              <div className="text-right h-8 text-xl text-SECONDARY-light  font-semibold  pr-2 hover:bg-SECONDARY-dark hover:text-WHITE">
                30
              </div>
              <div className="text-right h-8 text-SECONDARY-light   font-medium pr-2 hover:bg-SECONDARY hover:text-WHITE flex justify-between"></div>
            </td>
            <td className="border-2 border-SECONDARY  w-36 p-0 hover:bg-SECONDARY-light">
              <div className="text-right h-8 text-xl  font-semibold  pr-2 hover:bg-SECONDARY-dark hover:text-WHITE">
                1
              </div>
              <div className="text-right h-8 text-SECONDARY  font-medium px-2 hover:bg-SECONDARY hover:text-WHITE flex justify-between items-center">
                <div className="flex justify-center items-center">
                  LB
                  <input
                    type="number"
                    name="number"
                    id=""
                    defaultValue="30"
                    max="30"
                    min="0"
                    className="w-10 h-5 border border-SECONDARY-light outline-none rounded  text-SECONDARY  text-center   ms-2"
                  />
                </div>
                <p>8</p>
              </div>
            </td>
            <td className="border-2 border-SECONDARY  w-36 p-0 hover:bg-SECONDARY-light">
              <div className="text-right h-8 text-xl  font-semibold  pr-2 hover:bg-SECONDARY-dark hover:text-WHITE">
                2
              </div>
              <div className="text-right h-8 text-SECONDARY  font-medium px-2 hover:bg-SECONDARY hover:text-WHITE flex justify-between items-center">
                <div className="flex justify-center items-center">
                  LB
                  <input
                    type="number"
                    name="number"
                    id=""
                    defaultValue="30"
                    max="30"
                    min="0"
                    className="w-10 h-5 border border-SECONDARY-light outline-none rounded  text-SECONDARY  text-center   ms-2"
                  />
                </div>
                <p>8</p>
              </div>
            </td>

            <td className="border-2 border-SECONDARY p-1 text-center text-xl w-36  text-SECONDARY font-semibold ">
              <div>15</div>
            </td>
          </tr>

          {/* Week 2 */}
          <tr>
            <th className="border-2 border-SECONDARY p-1 text-center">
              <span>Week</span> <span> 2</span>
            </th>
            <td className="border-2 border-SECONDARY  w-36 p-0 hover:bg-SECONDARY-light">
              <div className="text-right h-8 text-xl  font-semibold  pr-2 hover:bg-SECONDARY-dark hover:text-WHITE">
                3
              </div>
              <div className="text-right h-8 text-SECONDARY  font-medium px-2 hover:bg-SECONDARY hover:text-WHITE flex justify-between items-center">
                <div className="flex justify-center items-center">
                  LB
                  <input
                    type="number"
                    name="number"
                    id=""
                    defaultValue="30"
                    max="30"
                    min="0"
                    className="w-10 h-5 border border-SECONDARY-light outline-none rounded  text-SECONDARY  text-center   ms-2"
                  />
                </div>
                <p>8</p>
              </div>
            </td>
            <td className="border-2 border-SECONDARY  w-36 p-0 hover:bg-SECONDARY-light">
              <div className="text-right h-8 text-xl  font-semibold  pr-2 hover:bg-SECONDARY-dark hover:text-WHITE">
                4
              </div>
              <div className="text-right h-8 text-SECONDARY  font-medium px-2 hover:bg-SECONDARY hover:text-WHITE flex justify-between items-center">
                <div className="flex justify-center items-center">
                  LB
                  <input
                    type="number"
                    name="number"
                    id=""
                    defaultValue="30"
                    max="30"
                    min="0"
                    className="w-10 h-5 border border-SECONDARY-light outline-none rounded  text-SECONDARY  text-center   ms-2"
                  />
                </div>
                <p>8</p>
              </div>
            </td>
            <td className="border-2 border-SECONDARY  w-36 p-0 hover:bg-SECONDARY-light">
              <div className="text-right h-8 text-xl  font-semibold  pr-2 hover:bg-SECONDARY-dark hover:text-WHITE">
                5
              </div>
              <div className="text-right h-8 text-SECONDARY  font-medium px-2 hover:bg-SECONDARY hover:text-WHITE flex justify-between items-center">
                <div className="flex justify-center items-center">
                  LB
                  <input
                    type="number"
                    name="number"
                    id=""
                    defaultValue="30"
                    max="30"
                    min="0"
                    className="w-10 h-5 border border-SECONDARY-light outline-none rounded  text-SECONDARY  text-center   ms-2"
                  />
                </div>
                <p>8</p>
              </div>
            </td>
            <td className="border-2 border-SECONDARY  w-36 p-0 hover:bg-SECONDARY-light">
              <div className="text-right h-8 text-xl  font-semibold  pr-2 hover:bg-SECONDARY-dark hover:text-WHITE">
                6
              </div>
              <div className="text-right h-8 text-SECONDARY  font-medium px-2 hover:bg-SECONDARY hover:text-WHITE flex justify-between items-center">
                <div className="flex justify-center items-center">
                  LB
                  <input
                    type="number"
                    name="number"
                    id=""
                    defaultValue="30"
                    max="30"
                    min="0"
                    className="w-10 h-5 border border-SECONDARY-light outline-none rounded  text-SECONDARY  text-center   ms-2"
                  />
                </div>
                <p>8</p>
              </div>
            </td>
            <td className="border-2 border-SECONDARY  w-36 p-0 hover:bg-SECONDARY-light">
              <div className="text-right h-8 text-xl  font-semibold  pr-2 hover:bg-SECONDARY-dark hover:text-WHITE">
                7
              </div>
              <div className="text-right h-8 text-SECONDARY  font-medium px-2 hover:bg-SECONDARY hover:text-WHITE flex justify-between items-center">
                <div className="flex justify-center items-center">
                  LB
                  <input
                    type="number"
                    name="number"
                    id=""
                    defaultValue="30"
                    max="30"
                    min="0"
                    className="w-10 h-5 border border-SECONDARY-light outline-none rounded  text-SECONDARY  text-center   ms-2"
                  />
                </div>
                <p>8</p>
              </div>
            </td>
            <td className="border-2 border-SECONDARY  w-36 p-0 hover:bg-SECONDARY-light">
              <div className="text-right h-8 text-xl  font-semibold  pr-2 hover:bg-SECONDARY-dark hover:text-WHITE">
                8
              </div>
              <div className="text-right h-8 text-SECONDARY  font-medium px-2 hover:bg-SECONDARY hover:text-WHITE flex justify-between items-center">
                <div className="flex justify-center items-center">
                  LB
                  <input
                    type="number"
                    name="number"
                    id=""
                    defaultValue="30"
                    max="30"
                    min="0"
                    className="w-10 h-5 border border-SECONDARY-light outline-none rounded  text-SECONDARY  text-center   ms-2"
                  />
                </div>
                <p>8</p>
              </div>
            </td>
            <td className="border-2 border-SECONDARY  w-36 p-0 hover:bg-SECONDARY-light">
              <div className="text-right h-8 text-xl  font-semibold  pr-2 hover:bg-SECONDARY-dark hover:text-WHITE">
                9
              </div>
              <div className="text-right h-8 text-SECONDARY  font-medium px-2 hover:bg-SECONDARY hover:text-WHITE flex justify-between items-center">
                <div className="flex justify-center items-center">
                  LB
                  <input
                    type="number"
                    name="number"
                    id=""
                    defaultValue="30"
                    max="30"
                    min="0"
                    className="w-10 h-5 border border-SECONDARY-light outline-none rounded  text-SECONDARY  text-center   ms-2"
                  />
                </div>
                <p>8</p>
              </div>
            </td>

            <td className="border-2 border-SECONDARY p-1 text-center text-xl w-36  text-SECONDARY font-semibold ">
              <div>47</div>
            </td>
          </tr>

          {/* Week 3 */}
          <tr>
            <th className="border-2 border-SECONDARY p-1 text-center">
              <span>Week</span> <span> 3</span>
            </th>
            <td className="border-2 border-SECONDARY  w-36 p-0 hover:bg-SECONDARY-light">
              <div className="text-right h-8 text-xl  font-semibold  pr-2 hover:bg-SECONDARY-dark hover:text-WHITE">
                10
              </div>
              <div className="text-right h-8 text-SECONDARY  font-medium px-2 hover:bg-SECONDARY hover:text-WHITE flex justify-between items-center">
                <div className="flex justify-center items-center">
                  LB
                  <input
                    type="number"
                    name="number"
                    id=""
                    defaultValue="30"
                    max="30"
                    min="0"
                    className="w-10 h-5 border border-SECONDARY-light outline-none rounded  text-SECONDARY  text-center   ms-2"
                  />
                </div>
                <p>8</p>
              </div>
            </td>
            <td className="border-2 border-SECONDARY  w-36 p-0 hover:bg-SECONDARY-light">
              <div className="text-right h-8 text-xl  font-semibold  pr-2 hover:bg-SECONDARY-dark hover:text-WHITE">
                11
              </div>
              <div className="text-right h-8 text-SECONDARY  font-medium px-2 hover:bg-SECONDARY hover:text-WHITE flex justify-between items-center">
                <div className="flex justify-center items-center">
                  LB
                  <input
                    type="number"
                    name="number"
                    id=""
                    defaultValue="30"
                    max="30"
                    min="0"
                    className="w-10 h-5 border border-SECONDARY-light outline-none rounded  text-SECONDARY  text-center   ms-2"
                  />
                </div>
                <p>8</p>
              </div>
            </td>
            <td className="border-2 border-SECONDARY  w-36 p-0 hover:bg-SECONDARY-light">
              <div className="text-right h-8 text-xl  font-semibold  pr-2 hover:bg-SECONDARY-dark hover:text-WHITE">
                12
              </div>
              <div className="text-right h-8 text-SECONDARY  font-medium px-2 hover:bg-SECONDARY hover:text-WHITE flex justify-between items-center">
                <div className="flex justify-center items-center">
                  LB
                  <input
                    type="number"
                    name="number"
                    id=""
                    defaultValue="30"
                    max="30"
                    min="0"
                    className="w-10 h-5 border border-SECONDARY-light outline-none rounded  text-SECONDARY  text-center   ms-2"
                  />
                </div>
                <p>8</p>
              </div>
            </td>
            <td className="border-2 border-SECONDARY  w-36 p-0 hover:bg-SECONDARY-light">
              <div className="text-right h-8 text-xl  font-semibold  pr-2 hover:bg-SECONDARY-dark hover:text-WHITE">
                13
              </div>
              <div className="text-right h-8 text-SECONDARY  font-medium px-2 hover:bg-SECONDARY hover:text-WHITE flex justify-between items-center">
                <div className="flex justify-center items-center">
                  LB
                  <input
                    type="number"
                    name="number"
                    id=""
                    defaultValue="30"
                    max="30"
                    min="0"
                    className="w-10 h-5 border border-SECONDARY-light outline-none rounded  text-SECONDARY  text-center   ms-2"
                  />
                </div>
                <p>8</p>
              </div>
            </td>
            <td className="border-2 border-SECONDARY  w-36 p-0 hover:bg-SECONDARY-light">
              <div className="text-right h-8 text-xl  font-semibold  pr-2 hover:bg-SECONDARY-dark hover:text-WHITE">
                14
              </div>
              <div className="text-right h-8 text-SECONDARY  font-medium px-2 hover:bg-SECONDARY hover:text-WHITE flex justify-between items-center">
                <div className="flex justify-center items-center">
                  LB
                  <input
                    type="number"
                    name="number"
                    id=""
                    defaultValue="30"
                    max="30"
                    min="0"
                    className="w-10 h-5 border border-SECONDARY-light outline-none rounded  text-SECONDARY  text-center   ms-2"
                  />
                </div>
                <p>8</p>
              </div>
            </td>
            <td className="border-2 border-SECONDARY  w-36 p-0 hover:bg-SECONDARY-light">
              <div className="text-right h-8 text-xl  font-semibold  pr-2 hover:bg-SECONDARY-dark hover:text-WHITE">
                15
              </div>
              <div className="text-right h-8 text-SECONDARY  font-medium px-2 hover:bg-SECONDARY hover:text-WHITE flex justify-between items-center">
                <div className="flex justify-center items-center">
                  LB
                  <input
                    type="number"
                    name="number"
                    id=""
                    defaultValue="30"
                    max="30"
                    min="0"
                    className="w-10 h-5 border border-SECONDARY-light outline-none rounded  text-SECONDARY  text-center   ms-2"
                  />
                </div>
                <p>8</p>
              </div>
            </td>
            <td className="border-2 border-SECONDARY  w-36 p-0 hover:bg-SECONDARY-light">
              <div className="text-right h-8 text-xl  font-semibold  pr-2 hover:bg-SECONDARY-dark hover:text-WHITE">
                16
              </div>
              <div className="text-right h-8 text-SECONDARY  font-medium px-2 hover:bg-SECONDARY hover:text-WHITE flex justify-between items-center">
                <div className="flex justify-center items-center">
                  LB
                  <input
                    type="number"
                    name="number"
                    id=""
                    defaultValue="30"
                    max="30"
                    min="0"
                    className="w-10 h-5 border border-SECONDARY-light outline-none rounded  text-SECONDARY  text-center   ms-2"
                  />
                </div>
                <p>8</p>
              </div>
            </td>

            <td className="border-2 border-SECONDARY p-1 text-center text-xl w-36  text-SECONDARY font-semibold ">
              <div>45</div>
            </td>
          </tr>

          {/* Week 4 */}
          <tr>
            <th className="border-2 border-SECONDARY p-1 text-center">
              <span>Week</span> <span> 4</span>
            </th>

            <td className="border-2 border-SECONDARY  w-36 p-0 hover:bg-SECONDARY-light">
              <div className="text-right h-8 text-xl  font-semibold  pr-2 hover:bg-SECONDARY-dark hover:text-WHITE">
                17
              </div>
              <div className="text-right h-8 text-SECONDARY  font-medium px-2 hover:bg-SECONDARY hover:text-WHITE flex justify-between items-center">
                <div className="flex justify-center items-center">
                  LB
                  <input
                    type="number"
                    name="number"
                    id=""
                    defaultValue="30"
                    max="30"
                    min="0"
                    className="w-10 h-5 border border-SECONDARY-light outline-none rounded  text-SECONDARY  text-center   ms-2"
                  />
                </div>
                <p>8</p>
              </div>
            </td>
            <td className="border-2 border-SECONDARY  w-36 p-0 hover:bg-SECONDARY-light">
              <div className="text-right h-8 text-xl  font-semibold  pr-2 hover:bg-SECONDARY-dark hover:text-WHITE">
                18
              </div>
              <div className="text-right h-8 text-SECONDARY  font-medium px-2 hover:bg-SECONDARY hover:text-WHITE flex justify-between items-center">
                <div className="flex justify-center items-center">
                  LB
                  <input
                    type="number"
                    name="number"
                    id=""
                    defaultValue="30"
                    max="30"
                    min="0"
                    className="w-10 h-5 border border-SECONDARY-light outline-none rounded  text-SECONDARY  text-center   ms-2"
                  />
                </div>
                <p>8</p>
              </div>
            </td>
            <td className="border-2 border-SECONDARY  w-36 p-0 hover:bg-SECONDARY-light">
              <div className="text-right h-8 text-xl  font-semibold  pr-2 hover:bg-SECONDARY-dark hover:text-WHITE">
                19
              </div>
              <div className="text-right h-8 text-SECONDARY  font-medium px-2 hover:bg-SECONDARY hover:text-WHITE flex justify-between items-center">
                <div className="flex justify-center items-center">
                  LB
                  <input
                    type="number"
                    name="number"
                    id=""
                    defaultValue="30"
                    max="30"
                    min="0"
                    className="w-10 h-5 border border-SECONDARY-light outline-none rounded  text-SECONDARY  text-center   ms-2"
                  />
                </div>
                <p>8</p>
              </div>
            </td>
            <td className="border-2 border-SECONDARY  w-36 p-0 hover:bg-SECONDARY-light">
              <div className="text-right h-8 text-xl  font-semibold  pr-2 hover:bg-SECONDARY-dark hover:text-WHITE">
                20
              </div>
              <div className="text-right h-8 text-SECONDARY  font-medium px-2 hover:bg-SECONDARY hover:text-WHITE flex justify-between items-center">
                <div className="flex justify-center items-center">
                  LB
                  <input
                    type="number"
                    name="number"
                    id=""
                    defaultValue="30"
                    max="30"
                    min="0"
                    className="w-10 h-5 border border-SECONDARY-light outline-none rounded  text-SECONDARY  text-center   ms-2"
                  />
                </div>
                <p>8</p>
              </div>
            </td>
            <td className="border-2 border-SECONDARY  w-36 p-0 hover:bg-SECONDARY-light">
              <div className="text-right h-8 text-xl  font-semibold  pr-2 hover:bg-SECONDARY-dark hover:text-WHITE">
                21
              </div>
              <div className="text-right h-8 text-SECONDARY  font-medium px-2 hover:bg-SECONDARY hover:text-WHITE flex justify-between items-center">
                <div className="flex justify-center items-center">
                  LB
                  <input
                    type="number"
                    name="number"
                    id=""
                    defaultValue="30"
                    max="30"
                    min="0"
                    className="w-10 h-5 border border-SECONDARY-light outline-none rounded  text-SECONDARY  text-center   ms-2"
                  />
                </div>
                <p>8</p>
              </div>
            </td>
            <td className="border-2 border-SECONDARY  w-36 p-0 hover:bg-SECONDARY-light">
              <div className="text-right h-8 text-xl  font-semibold  pr-2 hover:bg-SECONDARY-dark hover:text-WHITE">
                22
              </div>
              <div className="text-right h-8 text-SECONDARY  font-medium px-2 hover:bg-SECONDARY hover:text-WHITE flex justify-between items-center">
                <div className="flex justify-center items-center">
                  LB
                  <input
                    type="number"
                    name="number"
                    id=""
                    defaultValue="30"
                    max="30"
                    min="0"
                    className="w-10 h-5 border border-SECONDARY-light outline-none rounded  text-SECONDARY  text-center   ms-2"
                  />
                </div>
                <p>8</p>
              </div>
            </td>
            <td className="border-2 border-SECONDARY  w-36 p-0 hover:bg-SECONDARY-light">
              <div className="text-right h-8 text-xl  font-semibold  pr-2 hover:bg-SECONDARY-dark hover:text-WHITE">
                23
              </div>
              <div className="text-right h-8 text-SECONDARY  font-medium px-2 hover:bg-SECONDARY hover:text-WHITE flex justify-between items-center">
                <div className="flex justify-center items-center">
                  LB
                  <input
                    type="number"
                    name="number"
                    id=""
                    defaultValue="30"
                    max="30"
                    min="0"
                    className="w-10 h-5 border border-SECONDARY-light outline-none rounded  text-SECONDARY  text-center   ms-2"
                  />
                </div>
                <p>8</p>
              </div>
            </td>

            <td className="border-2 border-SECONDARY p-1 text-center text-xl w-36  text-SECONDARY font-semibold ">
              <div>44</div>
            </td>
          </tr>

          {/* Week 5 */}
          <tr>
            <th className="border-2 border-SECONDARY p-1 text-center">
              <span>Week</span> <span> 5</span>
            </th>
            <td className="border-2 border-SECONDARY  w-36 p-0 hover:bg-SECONDARY-light">
              <div className="text-right h-8 text-xl  font-semibold  pr-2 hover:bg-SECONDARY-dark hover:text-WHITE">
                24
              </div>
              <div className="text-right h-8 text-SECONDARY  font-medium px-2 hover:bg-SECONDARY hover:text-WHITE flex justify-between items-center">
                <div className="flex justify-center items-center">
                  LB
                  <input
                    type="number"
                    name="number"
                    id=""
                    defaultValue="30"
                    max="30"
                    min="0"
                    className="w-10 h-5 border border-SECONDARY-light outline-none rounded  text-SECONDARY  text-center   ms-2"
                  />
                </div>
                <p>8</p>
              </div>
            </td>
            <td className="border-2 border-SECONDARY  w-36 p-0 hover:bg-SECONDARY-light">
              <div className="text-right h-8 text-xl  font-semibold  pr-2 hover:bg-SECONDARY-dark hover:text-WHITE">
                25
              </div>
              <div className="text-right h-8 text-SECONDARY  font-medium px-2 hover:bg-SECONDARY hover:text-WHITE flex justify-between items-center">
                <div className="flex justify-center items-center">
                  LB
                  <input
                    type="number"
                    name="number"
                    id=""
                    defaultValue="30"
                    max="30"
                    min="0"
                    className="w-10 h-5 border border-SECONDARY-light outline-none rounded  text-SECONDARY  text-center   ms-2"
                  />
                </div>
                <p>8</p>
              </div>
            </td>
            <td className="border-2 border-SECONDARY  w-36 p-0 hover:bg-SECONDARY-light">
              <div className="text-right h-8 text-xl  font-semibold  pr-2 hover:bg-SECONDARY-dark hover:text-WHITE">
                26
              </div>
              <div className="text-right h-8 text-SECONDARY  font-medium px-2 hover:bg-SECONDARY hover:text-WHITE flex justify-between items-center">
                <div className="flex justify-center items-center">
                  LB
                  <input
                    type="number"
                    name="number"
                    id=""
                    defaultValue="30"
                    max="30"
                    min="0"
                    className="w-10 h-5 border border-SECONDARY-light outline-none rounded  text-SECONDARY  text-center   ms-2"
                  />
                </div>
                <p>8</p>
              </div>
            </td>
            <td className="border-2 border-SECONDARY  w-36 p-0 hover:bg-SECONDARY-light">
              <div className="text-right h-8 text-xl  font-semibold  pr-2 hover:bg-SECONDARY-dark hover:text-WHITE">
                27
              </div>
              <div className="text-right h-8 text-SECONDARY  font-medium px-2 hover:bg-SECONDARY hover:text-WHITE flex justify-between items-center">
                <div className="flex justify-center items-center">
                  LB
                  <input
                    type="number"
                    name="number"
                    id=""
                    defaultValue="30"
                    max="30"
                    min="0"
                    className="w-10 h-5 border border-SECONDARY-light outline-none rounded  text-SECONDARY  text-center   ms-2"
                  />
                </div>
                <p>8</p>
              </div>
            </td>
            <td className="border-2 border-SECONDARY  w-36 p-0 hover:bg-SECONDARY-light">
              <div className="text-right h-8 text-xl  font-semibold  pr-2 hover:bg-SECONDARY-dark hover:text-WHITE">
                28
              </div>
              <div className="text-right h-8 text-SECONDARY  font-medium px-2 hover:bg-SECONDARY hover:text-WHITE flex justify-between items-center">
                <div className="flex justify-center items-center">
                  LB
                  <input
                    type="number"
                    name="number"
                    id=""
                    defaultValue="30"
                    max="30"
                    min="0"
                    className="w-10 h-5 border border-SECONDARY-light outline-none rounded  text-SECONDARY  text-center   ms-2"
                  />
                </div>
                <p>8</p>
              </div>
            </td>
            <td className="border-2 border-SECONDARY  w-36 p-0 hover:bg-SECONDARY-light">
              <div className="text-right h-8 text-xl  font-semibold  pr-2 hover:bg-SECONDARY-dark hover:text-WHITE">
                29
              </div>
              <div className="text-right h-8 text-SECONDARY  font-medium px-2 hover:bg-SECONDARY hover:text-WHITE flex justify-between items-center">
                <div className="flex justify-center items-center">
                  LB
                  <input
                    type="number"
                    name="number"
                    id=""
                    defaultValue="30"
                    max="30"
                    min="0"
                    className="w-10 h-5 border border-SECONDARY-light outline-none rounded  text-SECONDARY  text-center   ms-2"
                  />
                </div>
                <p>8</p>
              </div>
            </td>
            <td className="border-2 border-SECONDARY  w-36 p-0 hover:bg-SECONDARY-light">
              <div className="text-right h-8 text-xl  font-semibold  pr-2 hover:bg-SECONDARY-dark hover:text-WHITE">
                30
              </div>
              <div className="text-right h-8 text-SECONDARY  font-medium px-2 hover:bg-SECONDARY hover:text-WHITE flex justify-between items-center">
                <div className="flex justify-center items-center">
                  LB
                  <input
                    type="number"
                    name="number"
                    id=""
                    defaultValue="30"
                    max="30"
                    min="0"
                    className="w-10 h-5 border border-SECONDARY-light outline-none rounded  text-SECONDARY  text-center   ms-2"
                  />
                </div>
                <p>8</p>
              </div>
            </td>

            <td className="border-2 border-SECONDARY p-1 text-center text-xl w-36  text-SECONDARY font-semibold ">
              <div>46</div>
            </td>
          </tr>

          {/* Week 6 */}
          <tr>
            <th className="border-2 border-SECONDARY p-1 text-center">
              <span>Week</span> <span> 6</span>
            </th>
            <td className="border-2 border-SECONDARY  w-36 p-0 hover:bg-SECONDARY-light">
              <div className="text-right h-8 text-xl  font-semibold  pr-2 hover:bg-SECONDARY-dark hover:text-WHITE">
                31
              </div>
              <div className="text-right h-8 text-SECONDARY  font-medium px-2 hover:bg-SECONDARY hover:text-WHITE flex justify-between items-center">
                <div className="flex justify-center items-center">
                  LB
                  <input
                    type="number"
                    name="number"
                    id=""
                    defaultValue="30"
                    max="30"
                    min="0"
                    className="w-10 h-5 border border-SECONDARY-light outline-none rounded  text-SECONDARY  text-center   ms-2"
                  />
                </div>
                <p>8</p>
              </div>
            </td>
            <td className="border-2 border-SECONDARY text-SECONDARY-light  w-36 p-0 hover:bg-SECONDARY-light">
              <div className="text-right h-8 text-xl  font-semibold  pr-2 hover:bg-SECONDARY-dark hover:text-WHITE">
                1
              </div>
              <div className="text-right h-8 text-SECONDARY  font-medium px-2 hover:bg-SECONDARY hover:text-WHITE flex justify-between items-center"></div>
            </td>
            <td className="border-2 border-SECONDARY text-SECONDARY-light  w-36 p-0 hover:bg-SECONDARY-light">
              <div className="text-right h-8 text-xl  font-semibold  pr-2 hover:bg-SECONDARY-dark hover:text-WHITE">
                2
              </div>
              <div className="text-right h-8 text-SECONDARY  font-medium px-2 hover:bg-SECONDARY hover:text-WHITE flex justify-between items-center"></div>
            </td>
            <td className="border-2 border-SECONDARY text-SECONDARY-light  w-36 p-0 hover:bg-SECONDARY-light">
              <div className="text-right h-8 text-xl  font-semibold  pr-2 hover:bg-SECONDARY-dark hover:text-WHITE">
                3
              </div>
              <div className="text-right h-8 text-SECONDARY  font-medium px-2 hover:bg-SECONDARY hover:text-WHITE flex justify-between items-center"></div>
            </td>
            <td className="border-2 border-SECONDARY text-SECONDARY-light w-36 p-0 hover:bg-SECONDARY-light">
              <div className="text-right h-8 text-xl  font-semibold  pr-2 hover:bg-SECONDARY-dark hover:text-WHITE">
                4
              </div>
              <div className="text-right h-8 text-SECONDARY  font-medium px-2 hover:bg-SECONDARY hover:text-WHITE flex justify-between items-center"></div>
            </td>
            <td className="border-2 border-SECONDARY text-SECONDARY-light  w-36 p-0 hover:bg-SECONDARY-light">
              <div className="text-right h-8 text-xl  font-semibold  pr-2 hover:bg-SECONDARY-dark hover:text-WHITE">
                5
              </div>
              <div className="text-right h-8 text-SECONDARY  font-medium px-2 hover:bg-SECONDARY hover:text-WHITE flex justify-between items-center"></div>
            </td>
            <td className="border-2 border-SECONDARY text-SECONDARY-light w-36 p-0 hover:bg-SECONDARY-light">
              <div className="text-right h-8 text-xl  font-semibold  pr-2 hover:bg-SECONDARY-dark hover:text-WHITE">
                6
              </div>
              <div className="text-right h-8 text-SECONDARY  font-medium px-2 hover:bg-SECONDARY hover:text-WHITE flex justify-between items-center"></div>
            </td>

            <td className="border-2 border-SECONDARY  p-1 text-center text-xl w-36  text-SECONDARY font-semibold ">
              <div>8</div>
            </td>
          </tr>

          <tr className="text-center  text-base">
            <td className=" w-36 p-0 h-8  "></td>
            <td className=" w-36 p-0 h-8"></td>
            <td className=" w-36 p-0 h-8 "></td>
            <td className=" w-36 p-0 h-8 "></td>
            <td className=" w-36 p-0 h-8 "></td>
            <td className=" w-36 p-0 h-8 "></td>
            <td className=" w-36 p-0 h-8 "></td>
            <td className="border-2 w-36 p-0 h-8 border-SECONDARY text-center text-base font-medium">
              Total
            </td>
            <td className="border-2 border-SECONDARY p-1 text-center text-xl w-36  text-SECONDARY font-semibold ">
              <div>165</div>
            </td>
          </tr>
        </tbody>
      </table>

      <DateLog></DateLog>
    </div>
  );
};

export default Calender;
