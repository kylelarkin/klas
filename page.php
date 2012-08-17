<?php get_header(); ?>

		<section>
		
			<?php if(have_posts()) : while(have_posts()) : the_post(); ?><!-- start loop -->
				<h1><?php the_title(); ?></h1>
				<?php the_content(); ?>
			<?php endwhile; endif; ?><!-- end loop -->
			
		</section>
		
		<?php get_sidebar(); ?>

<?php get_footer(); ?>