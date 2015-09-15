require('plist')

class Sticker
	def initialize(filename)
		@filename = filename
	end

	def to_dict
		return {
			:filename => @filename
		}
	end
end

class Index
	def initialize
		@stickers = []
	end

	def add_sticker (sticker)
		@stickers << sticker
	end

	def to_plist
		return {
				:stickers => @stickers.map(&:to_dict)
			}.to_plist
	end
end

index = Index.new

Dir.glob("Images/*") { |file|
	sticker = Sticker.new(file)
	index.add_sticker sticker
}

puts(index.to_plist)