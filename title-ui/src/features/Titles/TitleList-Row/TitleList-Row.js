import React, { useState} from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import Detail  from "../TitlesDetail/Detail";

const TitleListRow = (props) => {
  const [expand, setExpand] = useState(false);

  return <>
      <tr key={props.titleId}>
        <td className="border-right-0 align-middle">
          <span
            tabIndex={props.tabIndex || 0}
            onKeyDown={(e) => {
              if (e.key === " ") setExpand(!expand);
            }}
            onClick={() => {
              setExpand(!expand);
            }}
          >
            {!expand ? (
              <IoIosArrowForward
                size={28}
              ></IoIosArrowForward>
            ) : (
              <IoIosArrowDown
                size={28}
              ></IoIosArrowDown>
            )}
          </span>
        </td>
        <td className="border-left-0 pr-3">{props.titleName}</td>
        <td className="pl-3 pr-3">{props.titleNameSortable}</td>
        <td className="pl-3 pr-3">{props.releaseYear}</td>
        <td className="pl-3 pr-3">{new Date(props.processedDateTimeUtc).toDateString()}</td>
      </tr>
      {
          expand ? <tr  className="bg-delta" key={"row-expanded-" + props.titleId}>
              <td colSpan="6"><Detail titleId={props.titleId} {...props}></Detail></td>
          </tr>:null
      }
  </>
};
export default TitleListRow;
