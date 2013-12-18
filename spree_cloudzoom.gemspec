# encoding: UTF-8
Gem::Specification.new do |s|
  s.platform    = Gem::Platform::RUBY
  s.name        = 'spree_cloudzoom'
  s.version     = '2.2.0.beta'
  s.summary     = 'Integrate cloudzoom jquery plugin to Spree'
  s.description = 'cloudzoom at http://www.starplugins.com/cloudzoom Cloud Zoom is a popular fly-out jQuery image zoom plugin used on many high profile retail sites.'
  s.required_ruby_version = '>= 1.9.3'

  s.author    = 'Manuel Vidaurre'
  s.email     = 'manuel.vidaurre@agiltec.com.mx'
  s.homepage  = 'http://www.agiltec.com.mx'

  #s.files       = `git ls-files`.split("\n")
  #s.test_files  = `git ls-files -- {test,spec,features}/*`.split("\n")
  s.require_path = 'lib'
  s.requirements << 'none'

  s.add_dependency 'spree_core', '~> 2.2.0.beta'

  s.add_development_dependency 'capybara', '~> 2.1'
  s.add_development_dependency 'coffee-rails'
  s.add_development_dependency 'database_cleaner'
  s.add_development_dependency 'factory_girl', '~> 4.2'
  s.add_development_dependency 'ffaker'
  s.add_development_dependency 'rspec-rails',  '~> 2.13'
  s.add_development_dependency 'sass-rails'
  s.add_development_dependency 'selenium-webdriver'
  s.add_development_dependency 'simplecov'
  s.add_development_dependency 'sqlite3'
end
