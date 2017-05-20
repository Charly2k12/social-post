# ---------------------------------------------------------------------
# http://compass-style.org/help/documentation/configuration-reference/
# ---------------------------------------------------------------------

# compass compile -e production --force
# compass compile --output-style compressed --force

require 'fileutils'
Encoding.default_external = "utf-8"

# Set this to the root of your project when deployed:
http_path       = "/"
sass_dir        = "src/"
css_dir         = "public/assets/css"
images_dir      = "public/assets/img"
javascripts_dir = "public/assets/js"
fonts_dir       = "public/assets/fonts"

# Development
environment = :development

# Production
# environment = :production

output_style = (environment == :development) ? :expanded : :compressed;
sourcemap = (environment == :development) ? true : false;

# To enable relative paths to assets via compass helper functions. Uncomment:
relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
# line_comments = false


# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass

min = false
filename = "social-post"
# filehash = ".f6569fb1ae53cfc33407"
filehash = ""
if min
  on_stylesheet_saved do |file|
    if File.exists?(file)
      # filename = File.basename(file, File.extname(file))
      File.rename(file, css_dir + "/" + filename + filehash + ".min" + File.extname(file))
    end
  end
end