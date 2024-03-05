import React from "react";
import { industryContent } from "../../utils/content";
import IndustryButton from "./IndustryButton";
import PropTypes from "prop-types";

const IndustryButtonList = ({onClickFun, idNaming, }) => {
  return (
    <div>
      {industryContent[idNaming].map((value, i) =>
        <IndustryButton onclickFunc={onClickFun} xs={value.xs} sm={value.sm} lg={value.lg} key={i} id={i + idNaming}
                        icon={value.icon}>{value.text}</IndustryButton>)}
    </div>
  );
};

export default IndustryButtonList;

IndustryButtonList.propTypes = {
  onClickFun:PropTypes.func,
  idNaming:PropTypes.string
}