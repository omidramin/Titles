import React, { useState, useEffect } from "react";
import axios from "axios";
import OverLay from "../../common/OverLay";

const Detail = (props) => {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:5000/api/Titles/titleId",
      params: {
        TitleId: props.titleId,
      },
    }).then((response) => {
      console.log(response);
      setDetails(response.data);
      setLoading(false);
    });
  }, [props.titleId]);

  return (
    <>
      {loading ? null : (
        <>
          <table className="table table-lg able-bordered">
            <thead className="table-active">
              <tr>
                <th className="pl-3 pr-3">Genre</th>
                <th className="pl-3 pr-3">Language</th>
                <th className="pl-3 pr-3">Type</th>
                <th className="pl-3 pr-3">Award</th>
                <th className="pl-3 pr-3">AwardWon</th>
                <th className="pl-3 pr-3">AwardYear</th>
                <th className="pl-3 pr-3">AwardCompany</th>
                <th className="pl-3 pr-3">Description</th>
                <th className="pl-3 pr-3">ParticipantName</th>
              </tr>
            </thead>
            <tbody>
              <tr key={details.titleId}>
                <td className="pl-3 pr-3">{details.genreName}</td>
                <td className="pl-3 pr-3">{details.titleNameLanguage}</td>
                <td className="pl-3 pr-3">{details.titleNameType}</td>
                <td className="pl-3 pr-3">{details.award}</td>
                <td className="pl-3 pr-3">{details.awardWon}</td>
                <td className="pl-3 pr-3">{details.awardYear}</td>
                <td className="pl-3 pr-3">{details.awardCompany}</td>
                <td className="pl-3 pr-3">
                  <OverLay
                    item={details.description}
                    title="Description"
                  ></OverLay>
                </td>
                <td className="pl-3 pr-3">{details.participantName}</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </>
  );
};
export default Detail;
