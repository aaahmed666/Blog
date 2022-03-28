import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharp from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
  border: "0",
  color: "#808080",
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharp
        sx={{
          transform: "rotate(90deg)",
          color: "white",
          borderRadius: "50%",
          width: "18px",
          height: "18px",
        }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  color: "var(--primary-color)",
  backgroundColor: "#e9f5f8",
  flexDirection: "row",
  marginBottom: "3px",
  padding: "0 30px",
  "&:hover": {
    color: "var(--main-color)",
  },
  "&:hover .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    backgroundColor: "var(--main-color)",
  },

  ":hover .MuiAccordionSummary-expandIconWrapper": {
    backgroundColor: "var(--main-color)",
  },

  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(180deg)",
    width: "18px",
    height: "18px",
    backgroundColor: "var(--primary-color)",
    borderRadius: "50%",
    color: "var(--white)",
  },
  "& .MuiAccordionSummary-expandIconWrapper": {
    width: "18px",
    height: "18px",
    backgroundColor: "var(--primary-color)",
    borderRadius: "50%",
    color: "var(--white)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
    minHeight: "40px",
    alignItems: "center",
  },
  "& .MuiAccordionSummary-content p": {
    fontFamily: "Tajawal",
    lineHeight: "17px",
    fontWeight: "700",
    letterSpacing: "0",
    fontSize: "17px",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: "5px",
  backgroundColor: "#f4fafb",
  padding: "15px 30px",
  "& p": {
    fontFamily: "Tajawal",
    fontWeight: "400",
  },
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography> ماهى الأمراض التى تصاحب السمنة المفرطة عادة؟</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
            القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في
            الصفحة التي يقرأها
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography> هل توجد خطورة فى عمليات السمنة المفرطة؟</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
            القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في
            الصفحة التي يقرأها
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>
            من هو المريض المثالى الذى يصلح لعمليات السمنة المفرطة؟
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
            القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في
            الصفحة التي يقرأها
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>
            من هو المريض المثالى الذى يصلح لعمليات السمنة المفرطة؟
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
            القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في
            الصفحة التي يقرأها
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
