
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <aside class="sidebar-left">
                        <ul class="nav nav-pills nav-stacked nav-arrow">
                       
                             <li><a href="<?php echo base_url();?>frontuser/dashboard"><?php echo lang('lang_dashboard_summary_link_name'); ?></a>
                            </li>
                              <li><a href="<?php echo base_url();?>frontuser/lottouseraccount"><?php echo lang('lang_dashboard_personal_info_link_name'); ?></a>
                            </li>
                            
                            <li><a href="<?php echo base_url();?>frontuser/lottouserbethistory"><?php echo lang('lang_dashboard_game_history_link_name'); ?></a>
                            </li>
 
                            <li><a href="<?php echo base_url();?>frontuser/lottouserdepositrequest"><?php echo lang('lang_dashboard_deposit_application_link_name'); ?></a>
                            </li>
                            <li><a href="<?php echo base_url();?>frontuser/lottouserpendingtickets"><?php echo lang('lang_dashboard_pending_tickets_link_name'); ?></a>
                            </li>
                            <li ><a href="<?php echo base_url();?>frontuser/lottousercreditcard"><?php echo lang('lang_dashboard_credit_card_link_name'); ?></a>
                            </li>
                            <li><a href="<?php echo base_url();?>frontuser/lottouserbankaccount"><?php echo lang('lang_dashboard_bank_account_link_name'); ?></a>
                            </li>
                        </ul>
                    </aside>
                </div>              			<div class="col-md-9">
               
                 	 <div class="col-md-12">
                     <!-- Small boxes (Stat box) -->
                    <div class="row">
                        <div class="col-lg-3 col-xs-6">
                            <!-- small box -->
                            <div class="small-box bg-aqua">
                                <div class="inner">
                                    <h3>
                                        <?php echo $totalbettings; ?> 
                                        
                                    </h3>
                                    <p>
                                        Apuestas Totales
                                    </p>
                                </div>
                                <div class="icon">
                                    <i class="ion ion-bag"></i>
                                </div>
                                <a href="<?php echo base_url();?>frontuser/lottouserbetinfo" class="small-box-footer">
                                    Más información <i class="fa fa-arrow-circle-right"></i>
                                </a>
                            </div>
                        </div><!-- ./col -->
                        <div class="col-lg-3 col-xs-6">
                            <!-- small box -->
                            <div class="small-box bg-green">
                                <div class="inner">
                                    <h3>
                                        <sup style="font-size: 20px">RD$</sup><?php echo $balanceofaccounts; ?>
                                    </h3>
                                    <p>
                                        Saldo De La Cuenta
                                    </p>
                                </div>
                                <div class="icon">
                                    <i class="ion ion-stats-bars"></i>
                                </div>
                                <a href="<?php echo base_url();?>frontuser/wallet" class="small-box-footer">
                                    Más información <i class="fa fa-arrow-circle-right"></i>
                                </a>
                            </div>
                        </div><!-- ./col -->
                        <div class="col-lg-3 col-xs-6">
                            <!-- small box -->
                            <div class="small-box bg-yellow">
                                <div class="inner">
                                    <h3>
                                           <sup style="font-size: 20px">RD$</sup><?php echo $totalbetamounts; ?>
                                    </h3>
                                    <p>
                                        Cantidad Total
                                    </p>
                                </div>
                                <div class="icon">
                                    <i class="ion ion-person-add"></i>
                                </div>
                                <a href="<?php echo base_url();?>frontuser/lottouserexpenseshistory" class="small-box-footer">
                                    Más información <i class="fa fa-arrow-circle-right"></i>
                                </a>
                            </div>
                        </div><!-- ./col -->
                       
                    </div><!-- /.row -->

                    <!-- Small boxes (Stat box) -->
                    <div class="row">
                        <div class="col-lg-3 col-xs-6">
                            <!-- small box -->
                            <div class="small-box bg-blue">
                                <div class="inner">
                                    <h3>
                                    <sup style="font-size: 20px">RD$</sup><?php echo $totalwinamounts; ?>
                                    </h3>
                                    <p>
                                        Ganancias Totales
                                    </p>
                                </div>
                                <div class="icon">
                                    <i class="ion ion-ios7-cart-outline"></i>
                                </div>
                                <a href="<?php echo base_url();?>frontuser/lottouserwinhistory" class="small-box-footer">
                                    Más información <i class="fa fa-arrow-circle-right"></i>
                                </a>
                            </div>
                        </div><!-- ./col -->
                        <div class="col-lg-3 col-xs-6">
                            <!-- small box -->
                            <div class="small-box bg-purple">
                                <div class="inner">
                                    <h3>
                                           <sup style="font-size: 20px">RD$</sup><?php echo $totaldeposit; ?>
                                    </h3>
                                    <p>
                                        Depósitos Totales
                                    </p>
                                </div>
                                <div class="icon">
                                    <i class="ion ion-ios7-briefcase-outline"></i>
                                </div>
                                <a href="<?php echo base_url();?>frontuser/lottouserdeposithistory" class="small-box-footer">
                                    Más información <i class="fa fa-arrow-circle-right"></i>
                                </a>
                            </div>
                        </div><!-- ./col -->
                        <div class="col-lg-3 col-xs-6">
                            <!-- small box -->
                            <div class="small-box bg-teal">
                                <div class="inner">
                                    <h3>
                                           <sup style="font-size: 20px">RD$</sup><?php echo $totalwithdrawal; ?>
                                    </h3>
                                    <p>
                                       Retiros Totales
                                    </p>
                                </div>
                                <div class="icon">
                                    <i class="ion ion-ios7-alarm-outline"></i>
                                </div>
                                <a href="<?php echo base_url();?>frontuser/lottouserwithdrawalhistory" class="small-box-footer">
                                    Más información <i class="fa fa-arrow-circle-right"></i>
                                </a>
                            </div>
                        </div><!-- ./col -->
                       
                    </div><!-- /.row -->
                
            </div>
            
             			<div class="col-md-10">
                    <div class="row">
                        <div class="col-md-12">
 
                       <h3>Información Monedero</h3>
                           
                            
                            <table class="table table-order">
                                <thead>
                                    <th>Balance de la cuenta </th>
                                         <th>Balance de bonos</th>
                                    </tr>
                                </thead>
                                <tbody>
                                     <?php 
foreach($result->result() as $row){


?>

 


                                <tr>
                                        
                                            
                                        <td><?php echo $balanceofaccounts;//echo $row->wallet_balance;?></td>
                                        <td><?php echo $row->bonus_balance;?></td>
                                       
                               
                            
                                    </tr>
                                    <?php 
}
?>
     
                                   
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="gap"></div>
                </div>
 </div>     
        </div>

</div>
        <!-- //////////////////////////////////

	//////////////END PAGE CONTENT///////// 

	////////////////////////////////////-->

 