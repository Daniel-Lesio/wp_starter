<?php

Kirki::add_panel( 'polish', array(
    'priority'    => 10,
    'title'       => esc_html__( 'Polish', 'kirki' ),
    'description' => esc_html__( 'My panel description', 'kirki' ),
) );
Kirki::add_section( 'title', array(
    'title'          => esc_html__( 'My Section', 'kirki' ),
    'description'    => esc_html__( 'My section description.', 'kirki' ),
    'panel'          => 'polish',
    'priority'       => 160,
) );

Kirki::add_field( 'theme_config_id', [
	'type'     => 'text',
	'settings' => 'text_setting',
	'label'    => esc_html__( 'Text Control', 'kirki' ),
	'section'  => 'title',
	'default'  => esc_html__( 'This is a default value', 'kirki' ),
	'priority' => 10,
] );

