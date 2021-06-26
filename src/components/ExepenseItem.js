import "./ExepenseItem.css";
function ExepenseItem() {
  return (
    <div className="expense-item">
      <div>March 28th</div>
      <div className="expense-item__description">
        <h2>Car Insurance </h2>
        <div className="expense-item__price">$345.67</div>
      </div>
    </div>
  );
}

export default ExepenseItem;
