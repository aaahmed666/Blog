import React from "react";
import classes from "./BodyMassTable.module.css";
import { FaTachometerAlt } from "react-icons/fa";

const BodyMassTable = () => {
  return (
    <div className={classes.table}>
      <div className={classes.roundList}>
        <div className={classes.bodyTable}>
          <FaTachometerAlt />
          <span>أقسام مؤشرات الكتلة</span>
        </div>
        <ul className={classes.tableList}>
          <li>أقل من 18.5</li>
          <li>تحت الوزن الطبيعي</li>
          <li>من 18.5 إلى 24.99</li>
          <li>الوزن الطبيعي</li>
          <li>من 25 إلى 29.99</li>
          <li>وزن زائد</li>
          <li>من 30 إلى 34.99</li>
          <li>سمنة من الدرجة الأولى</li>
          <li>من 35 إلى 39.99</li>
          <li>سمنة من الدرجة الثانية</li>
          <li>من 40 إلى 49.99</li>
          <li>سمنة مرضية مفرطة</li>
          <li>أكثر من 50</li>
          <li>سمنة فوق المفرطة</li>
        </ul>
      </div>
    </div>
  );
};

export default BodyMassTable;
