



<?php 
/* Template Name: Front Page */

get_header(); 


get_template_part( 'template-parts/content', 'header' ); 
?>
        <?php  get_template_part( 'template-parts/content', 'test' ); ?>
<?php
  the_title( '<h2>', '</h2>' ); 
  the_post_thumbnail(); 
  the_excerpt();
?>
<h1 style='color : red'><?php __( 'Hello, dear user!', 'my-text-domain' ); ?>
</h1>
    <?php
    if ( have_posts() ) : 
        while ( have_posts() ) : the_post(); 
        the_content();
        endwhile; 
    endif; 
    ?>


    <?php get_footer();?> 
