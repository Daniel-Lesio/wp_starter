
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo get_bloginfo( 'name' ); ?></title>
    <?php wp_head(); ?>
            <?php  get_template_part( 'template-parts/content', 'meta' ); ?>

<body>
<?php
if(true == get_theme_mod( 'progress_seting', true )){
    ?>
    <div class="work-in-progress">
        <h1>Stronax w budowie</h1>
    </div>
    <?php
}
?>


