<section class="content" id="project-view-page">
<style>
table.tabBottom ,
.tabBottom th,
.tabBottom tr,
.tabBottom td{
padding:5px;	font-size:8px;
border:1px solid #cccccc;}
.tabBottom .odd {
background-color: #e8e8e8;}
.tabBottoms{
  margin-top:30px;
}</style>
<h2 style="text-align:center">Purchase Order</h2>
        		<?php //echo "<pre>"; print_r($orderDetails);?>
  		<table width="100%" class="tableTop tabBottom">
        		<!--<tr>
              		<td colspan="2" style="text-align:center;">
                    		<img src="http://smartzminds.com/pps/api/assets/img/PPS-Logo-1.png"/>
                    </td>
                  </tr>-->
                  <tr>
                    <td>
                      <label class="control-label" for=""><strong>Order No.#</strong> </label>
                      <?php echo $orderDetails->orderNumber;?>
                    </td>
                    <td>
                      <label class="control-label" for=""><strong>Store Name:</strong></label>
                      <?php echo ucfirst($orderDetails->storeName);?>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label class="control-label" for=""><strong>Order AddedOn:</strong> </label>
                      <?php echo date('F j, Y',strtotime($orderDetails->orderAddedOn));?>
                    </td>
                    <td>
                      <!-- <label class="control-label" for=""><strong>Store Id:</strong> </label> -->
                      <?php 					$orderStatus =  $orderDetails->orderStatus;
                      if($orderStatus == 1)
                      {
                        $status = 'Accepted';
                      }
                      else if($orderStatus == 2)
                      {
                        $status = 'Rejected';
                      }
                      else
                      {
                        $status = '';
                      }
                      //echo $status;
                      echo $orderDetails->storeId;
                      ?>
                    </td>
                  </tr>
                  <tr>
                    <td>
                    <label class="control-label"><strong>Store Address: </strong></label>
                    <?php  echo $orderDetails->storeAddress; ?>
                    </td>
                    <td>
                    <label class="control-label"><strong>Store City: </strong></label>
                    <?php  echo $orderDetails->storeCity; ?>
                    </td>
                  </tr>
                  <tr>
                    <td>
                    <label class="control-label"><strong>Store State: </strong></label>
                    <?php  echo $orderDetails->storeState; ?>
                    </td>
                    <td>
                    <label class="control-label"><strong>Store Zip: </strong></label>
                    <?php  echo $orderDetails->storeZip; ?>
                    </td>
                  </tr>
                </table>
                <br/>
                <br/>
                  <table style="width:100%" class="table tabBottom" id="tabId">
                    <thead>
                      <tr>
                        <th width="50px" style="font-weight:bold;background-color:#2561A7;color:#fff;">Sr.No.</th>
                        <th width="288px"  style="font-weight:bold;background-color:#2561A7;color:#fff;">Item Name</th>
                        <th width="100px" style="font-weight:bold;background-color:#2561A7;color:#fff;">Item Quantity</th>
                        <th width="100px" style="font-weight:bold;background-color:#2561A7;color:#fff;">Item Price</th>
                        <th width="100px" style="font-weight:bold;background-color:#2561A7;color:#fff;">Total Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <?php
                      //echo "<pre>"; print_r($orderDetails->items);  die;
                      if(!empty($orderDetails->items))
                      {
                        $orderItemPrice = 0;
                        $i = 1;
                        foreach($orderDetails->items as $key=>$value)
                        {
                          $orderItemPrice += $value->orderItemPrice;
                          if ($i % 2 == 0)
                          {
                            $color = 'odd';
                          }
                          else
                          {
                            $color = '';
                          }
                          ?>
                          <tr class="<?php echo $color; ?>">
                            	<td width="50px"><?php echo $i;?></td>
                              <td width="288"><?php echo $value->orderproductName;?></td>
                              <td width="100px"><?php echo $value->orderItemQty;?></td>
                              <td width="100px"><?php echo ($value->orderItemPrice / $value->orderItemQty); ?></td>
                              <td width="100px"><?php echo number_format((float) $value->orderItemPrice, 2, '.', ','); ?></td>
                            </tr>
                            <?php
                            $i++;
                          }
                        }
                        ?>
                      </tbody>
                      <tfoot>
                        <tr class="total">
                          <td colspan="3"></td>
                          <td style="text-align:center;">
                            <strong class="Total">Total </strong>
                          </td>
                          <td><strong class="Total columnTotalRevenueTotal">$<?php echo number_format((float) $orderItemPrice, 2, '.', ','); ?></strong>
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                 </section>
