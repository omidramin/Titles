import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from 'react-bootstrap/Tooltip';
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

import React from "react";

 const OverLay = (props) => {
  return (
    <div>
      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip id="button-tooltip-2">{props.item}</Tooltip>}
      >
        {({ ref, ...triggerHandler }) => (
          <Button
            variant="light"
            {...triggerHandler}
            className="d-inline-flex align-items-center"
          >
            <Image
              ref={ref}
              roundedCircle
              src="holder.js/20x20?text=J&bg=28a745&fg=FFF"
            />
            <span className="ml-1">{props.title}</span>
          </Button>
        )}
      </OverlayTrigger>
      ,
    </div>
  );
};
export default OverLay;
