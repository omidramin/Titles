import React from "react";

const TitleDetailRow = (props) => {
  return (
    <>
      <tr key={props.titleId}>
        <td>{}</td>
        <td>{props.genreName}</td>
        <td>{props.titleNameLanguage}</td>
        <td>{props.titleNameType}</td>
        <td>{props.award}</td>
        <td>{props.awardWon}</td>
        <td>{props.awardYear}</td>
        <td>{props.awardCompany}</td>
        <td>{props.description}</td>
        <td>{props.participantName}</td>
      </tr>
    </>
  );
};
export default TitleDetailRow;
