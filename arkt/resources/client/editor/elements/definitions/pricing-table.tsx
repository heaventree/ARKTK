import {ArchitectElement} from '../architect-element';
import {hasClass} from '../../utils/has-class';
import {MonetizationOnIcon} from '@common/icons/material/MonetizationOn';

const template = `<div class="row pricing-table">
  <div class="col-sm-4">
    <div class="panel panel-success">
      <div class="panel-heading">Basic</div>
      <div class="panel-body">
        <h2>
          <div class="price"><span class="dollar-sign">$</span>5</div>
          <span class="time-period">/ MO</span>
        </h2>
      </div>

      <ul class="list-group">
        <li class="list-group-item"><i class="fa fa-check text-success"></i> 10GB Storage</li>
        <li class="list-group-item"><i class="fa fa-check text-success"></i>All Themes</li>
        <li class="list-group-item"><i class="fa fa-times text-danger"></i> Access to Tutorials</li>
        <li class="list-group-item"><i class="fa fa-times text-danger"></i> Auto Backup</li>
        <li class="list-group-item"><i class="fa fa-times text-danger"></i> Extended Security</li>
      </ul>

      <button class="btn btn-success">sign up</button>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="panel panel-danger">
      <div class="panel-heading">Intermediate</div>
      <div class="panel-body">
        <h2>
          <div class="price"><span class="dollar-sign">$</span>15</div>
          <span class="time-period">/ MO</span>
        </h2>
      </div>

      <ul class="list-group">
        <li class="list-group-item"><i class="fa fa-check text-success"></i> 50GB Storage</li>
        <li class="list-group-item"><i class="fa fa-check text-success"></i>All Themes</li>
        <li class="list-group-item">
          <i class="fa fa-check text-success"></i> Access to Tutorials
        </li>
        <li class="list-group-item"><i class="fa fa-times text-success"></i> Auto Backup</li>
        <li class="list-group-item"><i class="fa fa-times text-success"></i> Extended Security</li>
      </ul>

      <button class="btn btn-danger">sign up</button>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="panel panel-info">
      <div class="panel-heading">Advanced</div>
      <div class="panel-body">
        <h2>
          <div class="price"><span class="dollar-sign">$</span>99</div>
          <span class="time-period">/ MO</span>
        </h2>
      </div>

      <ul class="list-group">
        <li class="list-group-item"><i class="fa fa-check text-success"></i> 100GB Storage</li>
        <li class="list-group-item"><i class="fa fa-check text-success"></i>All Themes</li>
        <li class="list-group-item">
          <i class="fa fa-check text-success"></i> Access to Tutorials
        </li>
        <li class="list-group-item"><i class="fa fa-check text-success"></i> Auto Backup</li>
        <li class="list-group-item"><i class="fa fa-check text-success"></i> Extended Security</li>
      </ul>

      <button class="btn btn-info">sign up</button>
    </div>
  </div>
</div>`;

const style = `
.pricing-table .panel-heading {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
}

.pricing-table .panel-body {
    background-color: #3F3F3F;
    color: #fff;
    text-align: center;
}

.pricing-table .panel-body .price {
    font-size: 40px;
    display: inline-block;
}

.pricing-table .price > .dollar-sign {
    vertical-align: super;
    font-size: 16px;
}

.pricing-table .time-period {
    color: #9f9f9f;
    font-size: 15px;
    font-weight: lighter;
}

.pricing-table .list-group {
    padding: 0 15px;
}

.pricing-table .list-group > .list-group-item {
    border-style: dotted;
    text-align: center;
    color: #808080;
}

.pricing-table .list-group-item > .fa {
    font-size: 13px;
    margin-right: 5px;
}

.pricing-table .btn {
    display: block;
    text-transform: uppercase;
    margin: 30px auto 20px;
    padding: 13px 35px 13px 35px;
    border-radius: 4px;
}
`;

export class PricingTableEl extends ArchitectElement {
  name = 'pricing table';
  contentCategories = ['flow'];
  html = template;
  css = style;
  allowedContent = ['flow'];
  category = 'components';
  icon = (<MonetizationOnIcon />);
  specificity = 3;
  hiddenClasses = ['pricing-table'];
  matcher(node: HTMLElement) {
    return hasClass(node, 'pricing-table');
  }
}
