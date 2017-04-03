<?php
/**
* @package   Widgetkit Component
* @file      spotlight.php
* @version   1.0.0 BETA 8 August 2011
* @author    YOOtheme http://www.yootheme.com
* @copyright Copyright (C) 2007 - 2011 YOOtheme GmbH
* @license   YOOtheme Proprietary Use License (http://www.yootheme.com/license)
*/

/*
	Class: SpotlightWidgetkitHelper
		Spotlight helper class
*/
class SpotlightWidgetkitHelper extends WidgetkitHelper {

	/* type */
	public $type;

	/* options */
	public $options;

	/*
		Function: Constructor
			Class Constructor.
	*/
	public function __construct($widgetkit) {
		parent::__construct($widgetkit);

		// init vars
		$this->type    = strtolower(str_replace('WidgetkitHelper', '', get_class($this)));
		$this->options = $this['system']->options;

		// register path
        $this['path']->register(dirname(__FILE__), $this->type);
	}

	/*
		Function: site
			Site init actions

		Returns:
			Void
	*/
	public function site() {

		// get options
		foreach (array('duration' => 300) as $option => $value) {
			$val = $this->options->get('spotlight_'.$option, $value);
			$options[$option] = is_numeric($val) ? (float) $val : $val;
		}

		// is enabled ?
		if ($this->options->get('spotlight_enable', 1)) {

			// add stylesheets/javascripts
			$this['asset']->addFile('css', 'spotlight:css/spotlight.css');
			$this['asset']->addFile('js', 'spotlight:js/spotlight.js');
			$this['asset']->addString('js', sprintf("jQuery(function($){ $('%s').spotlight(%s); });", $this->options->get('spotlight_selector', '[data-spotlight]'), count($options) ? json_encode($options) : '{}'));

		}

	}

	/*
		Function: dashboard
			Render dashboard layout

		Returns:
			Void
	*/
	public function dashboard() {

		// get xml
		$xml = simplexml_load_file($this['path']->path('spotlight:spotlight.xml'));

		// add js
        $this['asset']->addFile('js', 'spotlight:js/dashboard.js');
		
		// render dashboard
		echo $this['template']->render('spotlight:layouts/dashboard', compact('xml'));
	}

	/*
		Function: config
			Save configuration

		Returns:
			Void
	*/
	public function config() {
	
		// save configuration
	    foreach ($this['request']->get('post:', 'array') as $option => $value) {
	        if (preg_match('/^spotlight_/', $option)) {
				$this['system']->options->set($option, $value);
	        }
	    }

		$this['system']->saveOptions();
	}

}

// bind events
$widgetkit = Widgetkit::getInstance();
$widgetkit['event']->bind('site', array($widgetkit['spotlight'], 'site'));
$widgetkit['event']->bind('dashboard', array($widgetkit['spotlight'], 'dashboard'));
$widgetkit['event']->bind('task:config_spotlight', array($widgetkit['spotlight'], 'config'));