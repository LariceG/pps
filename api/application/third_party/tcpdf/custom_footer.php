<?php
ini_set("display_errors", 1);

// Include the main TCPDF library (search for installation path).
require_once('tcpdf.php');

// Extend the TCPDF class to create custom Header and Footer
    class MYPDF extends TCPDF {

      // Page footer
    public function Footer() {
        // Position at 25 mm from bottom
        $this->SetY(-35);
        // Set font
        $this->SetFont('helvetica', 'B', 12); 
		// set color for background
		$this->SetFillColor(215, 235, 255);
		// set color for text
		$this->SetTextColor(249, 156, 53);
        $this->Cell(0, 0, 'Guelph          Cambridge        Kitchener        Burlington        Mississauga', 0, 0, 'J');
        $this->Ln();
        $this->Cell(0,0,'519 836 0044        519 624 6991        519 653 8466        905 854 1670        905 858 2056', 0, false, 'J', 0, '', 0, false, 'T', 'M');        
        // Page number
       // $this->Cell(0, 10, 'Page '.$this->getAliasNumPage().'/'.$this->getAliasNbPages(), 0, false, 'C', 0, '', 0, false, 'T', 'M');
    }
    
}
?>