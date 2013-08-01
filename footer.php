		</div> <!-- End .content-wrapper -->
		
		<footer>
			<p>&copy; <?php echo date("Y"); ?> Company Name.</p>
		</footer>

	</div> <!-- Close .wrapper !-->

<?php wp_enqueue_script( 'js-combo', get_bloginfo( 'template_directory' ) . '/js/script-min.js', array('jquery')); ?>

<?php wp_footer(); ?><!-- required don't remove -->

</body>
</html>
